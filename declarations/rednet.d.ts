/** @noSelfInFile */
declare namespace rednet {
    /** 
     * The channel used by the Rednet API to [broadcast](https://tweaked.cc/module/rednet.html#v:broadcast) messages.
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:CHANNEL_BROADCAST)
     */
    const CHANNEL_BROADCAST = 65535
    /** 
     * The channel used by the Rednet API to repeat messages.
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:CHANNEL_REPEAT)
     */
    const CHANNEL_REPEAT = 65533

    /** 
     * Opens a modem with the given @{peripheral} name, allowing it to send and receive messages over rednet.
     *
     * This will open the modem on two channels: one which has the same @{os.getComputerID|ID} as the computer, and another on @{CHANNEL_BROADCAST|the broadcast channel}.
     *
     * @param modem The name of the modem to open.
     * @throws If there is no such modem with the given name `"No such modem: ${modem}`
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:open)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/rednet.open)
     */
    function open(modem: ComputerSide): void
    
    /** 
     * Close a modem with the given @{peripheral} name, meaning it can no longer send and receive rednet messages.
     *
     * @param modem The side the modem exists on. If not given, all open modems will be closed.
     * @throws If there is no such modem with the given name `"No such modem: ${modem}`
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:close)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/rednet.close)
     */
    function close(modem: ComputerSide | null): void
    
    /** Determine if rednet is currently open.
     *
     * @param modem Which modem to check. If not given, all connected modems will be checked.
     * @return boolean If the given modem is open.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:isOpen)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/rednet.isOpen)
     */
    function isOpen(modem: ComputerSide): boolean
    
    /** Allows a computer or turtle with an attached modem to send a message intended for a system with a specific ID. At least one such modem must first
     * be @{rednet.open|opened} before sending is possible.
     *
     * Assuming the target was in range and also had a correctly opened modem, it may then use @{rednet.receive} to collect the message.
     *
     * @param number nRecipient The ID of the receiving computer.
     * @param message The message to send. This should not contain coroutines or functions, as they will be converted to @{nil}.
     * @param string sProtocol The "protocol" to send this message under. When using @{rednet.receive} one can filter to only receive messages sent under a
     * particular protocol.
     * @return boolean If this message was successfully sent (i.e. if rednet is currently @{rednet.open|open}). Note, this does not guarantee the message was
     * actually _received_.
     * @see rednet.receive
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:send)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/rednet.send)
     */
    function send(nRecipient: number, message: any, sProtocol?: string | null): boolean
    
    /** Broadcasts a string message over the predefined @{CHANNEL_BROADCAST} channel. The message will be received by every device listening to rednet.
     *
     * @param message The message to send. This should not contain coroutines or functions, as they will be converted to @{nil}.
     * @param sProtocol The "protocol" to send this message under. When using @{rednet.receive} one can filter to only receive messages sent under a
     * particular protocol.
     * @see rednet.receive
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:broadcast)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/rednet.broadcast)
     */
    function broadcast(message: any, sProtocol?: string | null): void
    
    /** Wait for a rednet message to be received, or until `nTimeout` seconds have elapsed.
     *
     * @tupleReturn
     * @param sProtocolFilter The protocol the received message must be sent with. If specified, any messages not sent under this protocol will be discarded.
     * @param nTimeout The number of seconds to wait if no message is received.
     * @return[1] `number` The computer which sent this message
     * @return[1] The received message
     * @return[1] `string|nil` The protocol this message was sent under.
     * @return[2] `null` If the timeout elapsed and no message was received.
     * @see rednet.broadcast
     * @see rednet.send
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:receive)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/rednet.receive)
     */
    function receive(sProtocolFilter?: string, nTimeout?: number): ([computerID: number, message: any, protocol: string|null] | null)
    
    /** Register the system as "hosting" the desired protocol under the specified name. If a rednet @{rednet.lookup|lookup} is performed for that protocol (and
     * maybe name) on the same network, the registered system will automatically respond via a background process, hence providing the system performing the
     * lookup with its ID number.
     *
     * Multiple computers may not register themselves on the same network as having the same names against the same protocols, and the title `localhost` is
     * specifically reserved. They may, however, share names as long as their hosted protocols are different, or if they only join a given network after
     * "registering" themselves before doing so (eg while offline or part of a different network).
     *
     * @param sProtocol The protocol this computer provides.
     * @param sHostname The name this protocol exposes for the given protocol.
     * @throws If trying to register a hostname which is reserved, or currently in use.
     * @throws `Reserved hostname`
     * @throws `Hostname in use`
     * @see rednet.unhost
     * @see rednet.lookup
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:host)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/rednet.host)
     */
    function host(sProtocol: string, sHostname: string): void
    
    /** Stop @{rednet.host|hosting} a specific protocol, meaning it will no longer respond to @{rednet.lookup} requests.
     *
     * @param sProtocol The protocol to unregister your self from.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:unhost)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/rednet.unhost)
     */
    function unhost(sProtocol: string): void
    
    /** Search the local rednet network for systems @{rednet.host|hosting} the desired protocol and returns any computer IDs that respond as "registered" against it.
     *
     * If a hostname is specified, only one ID will be returned (assuming an exact match is found).
     *
     * @param sProtocol The protocol to search for.
     * @param sHostname The hostname to search for.
     *
     * @return[1] { number }|nil A list of computer IDs hosting the given protocol, or @{nil} if none exist.
     * @return[2] number|nil The computer ID with the provided hostname and protocol, or @{nil} if none exists.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:lookup)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/rednet.lookup)
     */
    function lookup(sProtocol: string, sHostname?: string | null): number[] | null
    
    /** Listen for modem messages and converts them into rednet messages, which may then be @{receive|received}.
     *
     * This is automatically started in the background on computer startup, and should not be called manually.
     * @throws `rednet is already running`
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/rednet.html#v:run)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/rednet.run)
     */
    function run(): void
}