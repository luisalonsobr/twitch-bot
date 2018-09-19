/// <reference types="node" />
import { EventEmitter } from 'events';
import { Message, RoomModerationCommand } from './types';
import { Options, SayOptions } from './interfaces';
declare class TwitchBot extends EventEmitter {
    private options;
    private socket;
    constructor(options: Options);
    connect(): Promise<void>;
    say(message: Message, options?: SayOptions): void;
    setRoomMode(mode: RoomModerationCommand): void;
    private listen;
    private sendCredentials;
    private joinChannels;
    private join;
    private write;
}
export = TwitchBot;
