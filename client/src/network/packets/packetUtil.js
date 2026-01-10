// creates a packet to send to the server
export function createPacket(name, data) {
    if(typeof name != 'string') {
        console.log("Invalid type provided for packet name");
        return;
    }

    if(typeof data != 'object') {
        console.log("Invalid type provided for packet data");
        return;
    }

    return JSON.stringify({ name, data });
}