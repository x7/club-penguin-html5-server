class PacketRegistry {
    constructor() {
        this.packets = new Map();
    }

    addPacket(name, callback) {
        const packetExist = this.doesPacketExist(name);
        if(packetExist) {
            console.log(`Packet ${name} already exist cannot re-add it`);
            return;
        }

        if(typeof callback != 'function') {
            console.log(`Callback has to be a function not ${typeof callback}`);
            return;
        }

        this.packets.set(name, callback);
    }

    removePacket(name) {
        const packetExist = this.doesPacketExist(name);
        if(!packetExist) {
            console.log(`Packet ${name} does not exist`);
            return;
        }

        this.packets.delete(name);
    }

    getPacket(name) {
        const packetExist = this.doesPacketExist(name);
        if(!packetExist) {
            console.log(`Packet ${name} does not exist`);
            return;
        }

        return this.packets.get(name);
    }

    doesPacketExist(name) {
        return this.packets.has(name);
    }   

    getAllPackets() {
        return this.packets;
    }
}

export default new PacketRegistry();