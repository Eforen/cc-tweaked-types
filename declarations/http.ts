/** @noSelfInFile */
declare namespace http {
    type AnyCase<T extends string> = string extends T ? string : T extends `${infer F1}${infer F2}${infer R}` ? (
        `${Uppercase<F1> | Lowercase<F1>}${Uppercase<F2> | Lowercase<F2>}${AnyCase<R>}`
    ) :
    T extends `${infer F}${infer R}` ? `${Uppercase<F> | Lowercase<F>}${AnyCase<R>}` :
    "";

    type HttpMethod = 'options' | 'get' | 'head' | 'post' | 'put' | 'patch' | 'delete' | 'trace' ;

    /**
     * Headers to send along with the request
     */
    type Headers = { [key: string]: string };

    /**
     * This table form is an expanded version of the previous syntax. All arguments from above are passed in as fields instead (for instance, http.request("https://example.com") becomes http.request { url = "https://example.com" }).
     */
    type HttpRequest = {
        /**
         * The url to request
         * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#v:request)
         */
        url: string;
        /**
         * An optional string containing the body of the request. If specified, a POST request will be made instead.
         * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#v:request)
         */
        body?: string;
        /**
         * Additional headers to send as part of this request.
         * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#v:request)
         */
        headers?: Headers;
        /**
         * Whether to make a binary HTTP request. If true, the body will not be UTF-8 encoded, and the received response will not be decoded.
         * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#v:request)
         */
        binary?: boolean;
        /**
         * Which HTTP method to use, for instance "PATCH" or "DELETE".
         * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#v:request)
         */
        method?: AnyCase<HttpMethod>;
        /**
         * Whether to follow HTTP redirects. Defaults to true.
         * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#v:request)
         */
        redirect?: boolean;
    };

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
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#v:websocket)
     * @see [[Out of Date] ComputerCraft Wiki](https://wiki.computercraft.cc/Http.websocket)
     */
    function websocket(url: string, headers?: Headers): lWebSocket | [ false, string ];

    /**
     * Asynchronously open a websocket.
     * This returns immediately, a websocket_success or websocket_failure will be queued once the request has completed.
     * ______________________________________________________________________________________________________________
     * @param url string The websocket url to connect to. This should have the `ws://` or `wss://` protocol.
     * @param headers? { [string] = string } Additional headers to send as part of the initial websocket connection.
     * @return Returns true if websockets are enabled and the max amount of websocket connections has not been reached
     * or
     * @tupleReturn
     * @return[1] false If the websocket connection failed.
     * @return[2] string An error message describing why the connection failed.
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#v:websocketAsync)
     * @see [Out of Date] ComputerCraft Wiki (Blank Docs Page)
     */
    function websocketAsync(url: string, headers?: Headers): true | [ false, string ];

    /**
     * Asynchronously make a HTTP request to the given url.
     * This returns immediately, a http_success or http_failure will be queued once the request has completed.
     * @param url The url to request
     * @param body An optional string containing the body of the request. If specified, a POST request will be made instead.
     * @param headers Additional headers to send as part of this request.
     * @param binary Whether to make a binary HTTP request. If true, the body will not be UTF-8 encoded, and the received response will not be decoded.
     * @return Returns true if http is enabled and the method is supported
     * or
     * @tupleReturn
     * @return[1] false If the http request failed.
     * @return[2] string An error message describing why the request failed.
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#v:request)
     * @see [[Out of Date] ComputerCraft Wiki](https://wiki.computercraft.cc/Http.request)
     */
    function request(url: string, body?: string, headers?: Headers, binary?: boolean): true | [ false, string ];

    /**
     * Asynchronously make a HTTP request to the given url.
     * This returns immediately, a http_success or http_failure will be queued once the request has completed.
     * @param request Options for the request.
     * @return Returns true if http is enabled and the method is supported
     * or
     * @tupleReturn
     * @return[1] false If the http request failed.
     * @return[2] string An error message describing why the request failed.
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#v:request)
     * @see [[Out of Date] ComputerCraft Wiki](https://wiki.computercraft.cc/Http.request)
     */
    function request(request: HttpRequest): true | [ false, string ];
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
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#ty:Websocket:receive)
     * @see [[Out of Date] ComputerCraft Wiki](https://wiki.computercraft.cc/Websocket.receive)
     */
    receive(timeout?: number): [string, boolean] | null;

    /**
     * Send a websocket message to the connected server.
     * ______________________________________________________________________________________________________________
     * @param message any The message to send.
     * @param binary? boolean Whether this message should be treated as a
     * @throws If the message is too large.
     * @throws If the websocket has been closed.
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#ty:Websocket:send)
     * @see [[Out of Date] ComputerCraft Wiki](https://wiki.computercraft.cc/Websocket.send)
     */
    send(message:any, binary?: boolean): void;

    /**
     * Close this websocket. This will terminate the connection, meaning messages can no longer be sent or received along it.
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/http.html#ty:Websocket:close)
     * @see [[Out of Date] ComputerCraft Wiki](https://wiki.computercraft.cc/Websocket.close)
     */
    close(): void;

}
