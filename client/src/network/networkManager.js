import { registerAllNetworkListeners } from "./networkUtil";
import packetRegistry from "./packets/packetRegistry";
import { createPacket } from "./packets/packetUtil";
import { registerPackets } from "./packets/registerPackets";

export class NetworkManager {
    isNetworkListenersRegister = false; // Are the network listeners registered
    isPacketsRegistered = false; // Are the packets setup
    subscribedListeners = new Set(); // Subscribed events of the client

    constructor(client) {
        this.client = client;
    }

    // Returns the current client instance
    getClient() {
        return this.client;
    }

    /*
        this will subscribe to the topic (make sure it exist on the server)
        e.g subscribe(/world/room/town) this will listen for all incoming packets from this server
        
    */
    subscribe(topic) {
        const listenerExist = this.subscribedListeners.has(topic);
        if(listenerExist) {
            console.log('Client is already subscribed to this event');
            return;
        }

        const packetCallback = packetRegistry.getPacket(topic);
        if(!packetCallback) {
            console.log(`Packet ${topic} was not found cannot add packet listener`);
            return;
        }

        this.client.subscribe(topic, packetCallback)
        this.subscribedListeners.add(topic);
        console.log('subscribed to ' + topic)
    }

    /*
        use this when u dont need to listen for packets anymore so like if u leave the town and go to the snow forts
        u dont need to be listening for incoming town packets so unsubscribe
    */
    unsubscribe(topic) {
        const listenerExist = this.subscribedListeners.has(topic);
        if(!listenerExist) {
            console.log('Client is not subscribed to this event');
            return;
        }

        this.client.unsubscribe(topic);
        this.subscribedListeners.delete(topic);
    }

    /*
        this will send data to a topic
        todo: make it easy to get this topic so we dont type it manualy out all the time
    */
    send(topic, data) {
        if(!this.isConnected()) {
            console.log('Client isnt connected unable to send packet');
            return;
        }

        const packet = createPacket(topic, data);
        if(!packet) {
            console.log("Invalid packet data");
            return;
        }

        this.client.publish({ destination: topic, body: packet });
        console.log(`Successfully sent packet to ${topic} with data ${packet}`);
    }

    /*
        activates the client connection and attempts to connect
    */
    activate() {
        if(this.client.active) {
            console.log('The client is active or connecting');
            return;
        }

        if(!this.isNetworkListenersRegister) {
            registerAllNetworkListeners();
            this.isNetworkListenersRegister = true;
        }

        if(!this.isPacketsRegistered) {
            registerPackets();
            this.isPacketsRegistered = true;
        }

        this.client.activate();
    }

    /*
        closes the current client connection
    */
    deactivate() {
        if(!this.client.active) {
            console.log('This client is already disconnected');
            return;
        }

        this.client.deactivate();
    }

    
    /*
        returns wether the client is connected or not
    */
    isConnected() {
        return this.client.connected;
    }
}