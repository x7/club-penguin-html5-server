import packetRegistry from "./packetRegistry";
import { CLIENT_ROUTES } from "../topics";

// Packets below this
import { test } from "./test/test";

// Handles registering all packet events
export function registerPackets() {
    packetRegistry.addPacket(CLIENT_ROUTES.CLIENT_TEST, test)
}