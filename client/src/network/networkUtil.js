import { getManager } from "./network";

// All network listeners here
import { onConnect } from "./connection/connect";
import { onDisconnect } from "./connection/disconnect";
import { onStompError, onWebSocketError } from "./connection/error";

export function registerAllNetworkListeners() {
    const client = getManager().getClient();

    client.onConnect = onConnect;
    client.onDisconnect = onDisconnect;
    client.onStompError = onStompError;
    client.onWebSocketError = onWebSocketError;
}