import packetRegistry from "../packets/packetRegistry";
import { getManager } from "../network";
import { EventEmitter } from "../../util/eventEmitter";

export function onConnect(client) {
    console.log('Client is connected');
    const clientManager = getManager();

    console.log('Now registering all packets...');  
    const packets = packetRegistry.getAllPackets();

    if(packets.size == 0) {
        console.log('No packets found to register.');
        return;
    }

    for(const packet of packets) {
        const packetTopic = packet[0];
        const packetCallBack = packet[1];
        clientManager.subscribe(packetTopic, packetCallBack);
    }

    console.log('Finished registering all packets');
    EventEmitter.emit("loading:complete");
}