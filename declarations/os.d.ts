// Defined in bios.lua
/** @noSelfInFile */

declare namespace os {

    /**
     * - Loads the given API into the global environment.
     *
     * **Warning** This function is deprecated. Use of this function will pollute the
     * global table, use @{require} instead.
     *
     * This function loads and executes the file at the given path, and all global
     * variables and functions exported by it will by available through the use of
     * `myAPI.<function name>`, where `myAPI` is the base name of the API file.
     *
     * @tparam string path The path of the API to load.
     * @treturn boolean Whether or not the API was successfully loaded.
     *
     * @deprecated Use @{require}.
     */
    function loadAPI(path: string):void

    /**
     * --- Unloads an API which was loaded by @{os.loadAPI}.
     * --
     * -- This effectively removes the specified table from `_G`.
     * --
     * -- @tparam string name The name of the API to unload.
     * -- @deprecated Use @{require}.
     */
    function unloadAPI(name: string):void

    type OSEvent = any[]

    /**
     * - Pause execution of the current thread and waits for any events matching
     * `filter`.
     *
     * This function @{coroutine.yield|yields} the current process and waits for it
     * to be resumed with a vararg list where the first element matches `filter`.
     * If no `filter` is supplied, this will match all events.
     *
     * Unlike @{os.pullEventRaw}, it will stop the application upon a "terminate"
     * event, printing the error "Terminated".
     *
     * @param[opt] string filter Event to filter for.
     * @tupleReturn
     * @return string event The name of the event that fired.
     * @return any param... Optional additional parameters of the event.
     * @usage Listen for `mouse_click` events.
     * ```
     *     while true do
     *         local event, button, x, y = os.pullEvent("mouse_click")
     *         print("Button", button, "was clicked at", x, ",", y)
     *     end
     * ```
     * @usage Listen for multiple events.
     * ```
     *     while true do
     *         local eventData = {os.pullEvent()}
     *         local event = eventData[1]
     *
     *         if event == "mouse_click" then
     *             print("Button", eventData[2], "was clicked at", eventData[3], ",", eventData[4])
     *         elseif event == "key" then
     *             print("Key code", eventData[2], "was pressed")
     *         end
     *     end
     * ```
     * @see os.pullEventRaw To pull the terminate event.
     */
    function pullEvent(): [string, ...any[]]
    function pullEvent(filter: string): [string, ...any[]]
    function pullEvent(filter: "key"): [string, number, boolean]
    function pullEvent(filter: "mouse_click"): [event:"mouse_click", button: string, x: number, y: number]
    /** @return {[string, number]} event tuple */
    function pullEvent(filter: "alarm"): [event: "alarm", id: number]

    /**
     * Pause execution of the current thread and waits for events, including the
     * `terminate` event.
     *
     * This behaves almost the same as @{os.pullEvent}, except it allows you to handle
     * the `terminate` event yourself - the program will not stop execution when
     * <kbd>Ctrl+T</kbd> is pressed.
     *
     * @tparam[opt] string filter Event to filter for.
     * @treturn string event The name of the event that fired.
     * @treturn any param... Optional additional parameters of the event.
     * @usage Listen for `terminate` events.
     *
     *     while true do
     *         local event = os.pullEventRaw()
     *         if event == "terminate" then
     *             print("Caught terminate event!")
     *         end
     *     end
     *
     * @see os.pullEvent To pull events normally.
     */
    function pullEventRaw(filter?: string): any

    /**
     * Pauses execution for the specified number of seconds, alias of @{_G.sleep}.
     *
     * @param seconds The number of seconds to sleep for, rounded up to the nearest multiple of 0.05.
     */
    function sleep(seconds:number):void

    /**
     * Get the current CraftOS version (for example, `CraftOS 1.8`).
     *
     * This is defined by `bios.lua`. For the current version of CC:Tweaked, this
     * should return `CraftOS 1.8`.
     *
     * @return string The current CraftOS version.
     * @usage os.version()
     */
     function version(): string

    /**
     * - Run the program at the given path with the specified environment and arguments.
     *
     * This function does not resolve program names like the shell does. This means
     * that, for example, `os.run("edit")` will not work. As well as this, it does not
     * provide access to the @{shell} API in the environment. For this behaviour, use
     * @{shell.run} instead.
     *
     * If the program cannot be found, or failed to run, it will print the error and
     * return `false`. If you want to handle this more gracefully, use an alternative
     * such as @{loadfile}.
     *
     * @tparam table env The environment to run the program with.
     * @tparam string path The exact path of the program to run.
     * @param ... The arguments to pass to the program.
     * @treturn boolean Whether or not the program ran successfully.
     * @usage Run the default shell from within your program:
     *
         * os.run({}, "/rom/programs/shell.lua")
     *
     * @see shell.run
     * @see loadfile
     */
    function run(env:any, path:any, ...args:any[]):void

    /**
     * This is a phantom type that represents a spesific Timer though in reality it is just a number.
     * Due to this it is totally safe to just use a number instead of a {@code TimerToken} specifically
     */
    type TimerToken = number

    /**
     * Starts a timer that will run for the specified number of seconds. Once
     * the timer fires, a {@code timer} event will be added to the queue with
     * the ID returned from this function as the first parameter.
     *
     * As with @{os.sleep|sleep}, {@code timer} will automatically be rounded up
     * to the nearest multiple of 0.05 seconds, as it waits for a fixed amount
     * of world ticks.
     *
     * @param seconds The number of seconds until the timer fires.
     * @return The ID of the new timer. This can be used to filter the
     *   {@code timer} event, or {@link #cancelTimer cancel the timer}.
     * @throws LuaException If the time is below zero.
     * @see #cancelTimer To cancel a timer.
     */
    function startTimer( seconds:number ): TimerToken

    /**
     * Adds an event to the event queue. This event can later be pulled with
     * os.pullEvent.
     *
     * @param name The name of the event to queue.
     * @param args The parameters of the event.
     * @cc.tparam string name The name of the event to queue.
     * @cc.param ... The parameters of the event.
     * @cc.see os.pullEvent To pull the event queued
     */
    function queueEvent( name: string, ...args: any[] ): void

    /**
     * Cancels a timer previously started with startTimer. This will stop the
     * timer from firing.
     *
     * @param token The ID of the timer to cancel.
     * @see #startTimer To start a timer.
     */
    function cancelTimer( token: TimerToken ): void

    /**
     * This is a phantom type that represents a specific Alarm though in reality it is just a number.
     * Due to this it is totally safe to just use a number instead of a {@code AlarmToken} specifically
     */
    type AlarmToken = number

    /**
     * Sets an alarm that will fire at the specified world time. When it fires,
     * an {@code alarm} event will be added to the event queue with the ID
     * returned from this function as the first parameter.
     *
     * @param time The time at which to fire the alarm, in the range [0.0, 24.0).
     * @return The ID of the new alarm. This can be used to filter the
     *   {@code alarm} event, or {@link #cancelAlarm cancel the alarm}.
     * @throws LuaException If the time is out of range.
     * @see #cancelAlarm To cancel an alarm.
     */
    function setAlarm( time: number ): AlarmToken

    /**
     * Cancels an alarm previously started with setAlarm. This will stop the
     * alarm from firing.
     *
     * @param token The ID of the alarm to cancel.
     * @see #setAlarm To set an alarm.
     */
    function cancelAlarm( token:number ):void

    /**
     * Shuts down the computer immediately.
     */
    function shutdown(): void

    /**
     * Reboots the computer immediately.
     */
    function reboot():void


    /**
     * This is a phantom type that represents a specific Computer though in reality it is just a id number.
     * Due to this it is totally safe to just use a number instead of a {@code ComputerID} specifically
     */
    type ComputerID = number

    /**
     * Returns the ID of the computer.
     *
     * @return The ID of the computer.
     */
    function getComputerID(): ComputerID

    /**
     * Returns the ID of the computer.
     *
     * @return The ID of the computer.
     */
    function computerID(): ComputerID

    /**
     * Returns the label of the computer, or {@code nil} if none is set.
     *
     * @return The label of the computer.
     * @cc.treturn string The label of the computer.
     */
    function getComputerLabel(): string

    /**
     * Returns the label of the computer, or {@code nil} if none is set.
     *
     * @return The label of the computer.
     * @cc.treturn string The label of the computer.
     */
    function computerLabel(): string

    /**
     * Set the label of this computer.
     *
     * @param label The new label. May be {@code null} in order to clear it.
     */
    function setComputerLabel( label?: string | null | undefined ): void

    /**
     * This is a phantom type that represents a specific Computer though in reality it is just a id number.
     * Due to this it is totally safe to just use a number instead of a {@code ComputerID} specifically
     */
    type Seconds = number

    /**
     * Returns the number of seconds that the computer has been running.
     *
     * @return The computer's uptime.
     */
    function clock(): Seconds

    // /**
    //  * Returns the current time depending on the string passed in. This will
    //  * always be in the range [0.0, 24.0).
    //  *
    //  * * If called with {@code ingame}, the current world time will be returned.
    //  *   This is the default if nothing is passed.
    //  * * If called with {@code utc}, returns the hour of the day in UTC time.
    //  * * If called with {@code local}, returns the hour of the day in the
    //  *   timezone the server is located in.
    //  *
    //  * This function can also be called with a table returned from {@link #date},
    //  * which will convert the date fields into a UNIX timestamp (number of
    //  * seconds since 1 January 1970).
    //  *
    //  * @param args The locale of the time, or a table filled by {@code os.date("*t")} to decode. Defaults to {@code ingame} locale if not specified.
    //  * @return The hour of the selected locale, or a UNIX timestamp from the table, depending on the argument passed in.
    //  * @cc.tparam [opt] string|table locale The locale of the time, or a table filled by {@code os.date("*t")} to decode. Defaults to {@code ingame} locale if not specified.
    //  * @see #date To get a date table that can be converted with this function.
    //  * @throws LuaException If an invalid locale is passed.
    //  */
    // function time( args ) throws LuaException
    // {
    //     Object value = args.get( 0 );
    //     if( value instanceof Map ) return LuaDateTime.fromTable( (Map<?, ?>) value );

    //     String param = args.optString( 0, "ingame" );
    //     switch( param.toLowerCase( Locale.ROOT ) )
    //     {
    //         case "utc": // Get Hour of day (UTC)
    //             return getTimeForCalendar( Calendar.getInstance( TimeZone.getTimeZone( "UTC" ) ) );
    //         case "local": // Get Hour of day (local time)
    //             return getTimeForCalendar( Calendar.getInstance() );
    //         case "ingame": // Get in-game hour
    //             return m_time;
    //         default:
    //             throw new LuaException( "Unsupported operation" );
    //     }
    // }

    // /**
    //  * Returns the day depending on the locale specified.
    //  *
    //  * * If called with {@code ingame}, returns the number of days since the
    //  *   world was created. This is the default.
    //  * * If called with {@code utc}, returns the number of days since 1 January
    //  *   1970 in the UTC timezone.
    //  * * If called with {@code local}, returns the number of days since 1
    //  *   January 1970 in the server's local timezone.
    //  *
    //  * @param args The locale to get the day for. Defaults to {@code ingame} if not set.
    //  * @return The day depending on the selected locale.
    //  * @throws LuaException If an invalid locale is passed.
    //  */
    // @LuaFunction
    // public final int day( Optional<String> args ) throws LuaException
    // {
    //     switch( args.orElse( "ingame" ).toLowerCase( Locale.ROOT ) )
    //     {
    //         case "utc":     // Get numbers of days since 1970-01-01 (utc)
    //             return getDayForCalendar( Calendar.getInstance( TimeZone.getTimeZone( "UTC" ) ) );
    //         case "local": // Get numbers of days since 1970-01-01 (local time)
    //             return getDayForCalendar( Calendar.getInstance() );
    //         case "ingame":// Get game day
    //             return m_day;
    //         default:
    //             throw new LuaException( "Unsupported operation" );
    //     }
    // }

    // /**
    //  * Returns the number of milliseconds since an epoch depending on the locale.
    //  *
    //  * * If called with {@code ingame}, returns the number of milliseconds since the
    //  *   world was created. This is the default.
    //  * * If called with {@code utc}, returns the number of milliseconds since 1
    //  *   January 1970 in the UTC timezone.
    //  * * If called with {@code local}, returns the number of milliseconds since 1
    //  *   January 1970 in the server's local timezone.
    //  *
    //  * @param args The locale to get the milliseconds for. Defaults to {@code ingame} if not set.
    //  * @return The milliseconds since the epoch depending on the selected locale.
    //  * @throws LuaException If an invalid locale is passed.
    //  */
    // @LuaFunction
    // public final long epoch( Optional<String> args ) throws LuaException
    // {
    //     switch( args.orElse( "ingame" ).toLowerCase( Locale.ROOT ) )
    //     {
    //         case "utc":
    //         {
    //             // Get utc epoch
    //             Calendar c = Calendar.getInstance( TimeZone.getTimeZone( "UTC" ) );
    //             return getEpochForCalendar( c );
    //         }
    //         case "local":
    //         {
    //             // Get local epoch
    //             Calendar c = Calendar.getInstance();
    //             return getEpochForCalendar( c );
    //         }
    //         case "ingame":
    //             // Get in-game epoch
    //             synchronized( m_alarms )
    //             {
    //                 return m_day * 86400000L + (long) (m_time * 3600000.0);
    //             }
    //         default:
    //             throw new LuaException( "Unsupported operation" );
    //     }
    // }

    // /**
    //  * Returns a date string (or table) using a specified format string and
    //  * optional time to format.
    //  *
    //  * The format string takes the same formats as C's {@code strftime} function
    //  * (http://www.cplusplus.com/reference/ctime/strftime/). In extension, it
    //  * can be prefixed with an exclamation mark ({@code !}) to use UTC time
    //  * instead of the server's local timezone.
    //  *
    //  * If the format is exactly {@code *t} (optionally prefixed with {@code !}), a
    //  * table will be returned instead. This table has fields for the year, month,
    //  * day, hour, minute, second, day of the week, day of the year, and whether
    //  * Daylight Savings Time is in effect. This table can be converted to a UNIX
    //  * timestamp (days since 1 January 1970) with {@link #date}.
    //  *
    //  * @param formatA The format of the string to return. This defaults to {@code %c}, which expands to a string similar to "Sat Dec 24 16:58:00 2011".
    //  * @param timeA The time to convert to a string. This defaults to the current time.
    //  * @return The resulting format string.
    //  * @throws LuaException If an invalid format is passed.
    //  */
    // @LuaFunction
    // public final Object date( Optional<String> formatA, Optional<Long> timeA ) throws LuaException
    // {
    //     String format = formatA.orElse( "%c" );
    //     long time = timeA.orElseGet( () -> Instant.now().getEpochSecond() );

    //     Instant instant = Instant.ofEpochSecond( time );
    //     ZonedDateTime date;
    //     ZoneOffset offset;
    //     if( format.startsWith( "!" ) )
    //     {
    //         offset = ZoneOffset.UTC;
    //         date = ZonedDateTime.ofInstant( instant, offset );
    //         format = format.substring( 1 );
    //     }
    //     else
    //     {
    //         ZoneId id = ZoneId.systemDefault();
    //         offset = id.getRules().getOffset( instant );
    //         date = ZonedDateTime.ofInstant( instant, id );
    //     }

    //     if( format.equals( "*t" ) ) return LuaDateTime.toTable( date, offset, instant );

    //     DateTimeFormatterBuilder formatter = new DateTimeFormatterBuilder();
    //     LuaDateTime.format( formatter, format, offset );
    //     return formatter.toFormatter( Locale.ROOT ).format( date );
    // }

    /**
     * When exactly `*t` is passed to {@link os.date} this is the returned table object
     */
    interface ComputerCraftDateTable {
        /** Seconds as number from 0 to 59 */
        sec: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59
        /** Minuets as number from 0 to 59 */
        min: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59
        /** Hours as number from 0 to 23 */
        hour: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31
        /** Month as number from 0 to 12 */
        month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
        /** Year anything > 1900 (This is epoch and computer date formats generally will not store any date older than this without a workaround) */
        year: number
        /** Number of seconds from 0 to 59 */
        wday: date.Sunday | date.Monday | date.Tuesday | date.Wednesday | date.Thursday | date.Friday | date.Saturday
        /** Number of seconds from 0 to 59 */
        yday: number
        /** Number of seconds from 0 to 59 */
        isdst: number
    }

    namespace date {
        /** In Lua Sunday is represented by the number 1. */
        type Sunday = 1
        /** In Lua Monday is represented by the number 2. */
        type Monday = 2
        /** In Lua Tuesday is represented by the number 3. */
        type Tuesday = 3
        /** In Lua Wednesday is represented by the number 4. */
        type Wednesday = 4
        /** In Lua Thursday is represented by the number 5. */
        type Thursday = 5
        /** In Lua Friday is represented by the number 6. */
        type Friday = 6
        /** In Lua Saturday is represented by the number 7. */
        type Saturday = 7
    }
}
