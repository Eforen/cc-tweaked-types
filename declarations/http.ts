/** @noSelfInFile */
declare namespace http {

    /**
     * Open a websocket.
     * ______________________________________________________________________________________________________________
     * @param url string The websocket url to connect to. This should have the `ws://` or `wss://` protocol.
     * @param headers? { [string] = string } Additional headers to send as part of the initial websocket connection.
     * @return Websocket The websocket connection.
     * or
     * @tupleReturn
     * @return[1] false If the websocket connection failed.
     * @return[2] string An error message describing why the connection failed.
     *
     */
    function websocket(url: string, headers?: {[key:string]: string}): lWebSocket | [false, string];
}

/** @noSelf **/
declare class lWebSocket {
    /**
     * Wait for a message from the server.
     * ______________________________________________________________________________________________________________
     * @param timeout? number The number of seconds to wait if no message is received.
     * @return nil If the websocket was closed while waiting, or if we timed out.
     * or
     * @tupleReturn
     * @return[1] string The received message.
     * @return[2] boolean If this was a binary message.
     * @throws If the websocket has been closed
     *
     */
    receive(timeout?: number): [string, boolean] | null;

    /**
     * Send a websocket message to the connected server.
     * ______________________________________________________________________________________________________________
     * @param message any The message to send.
     * @param binary? boolean Whether this message should be treated as a
     * @throws If the message is too large.
     * @throws If the websocket has been closed.
     */
    send(message:any, binary: boolean): void;

    /**
     *     Close this websocket. This will terminate the connection, meaning messages can no longer be sent or received along it.
     */
    close(): void;

}
