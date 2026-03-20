import type { LamdisConfig, LamdisEvent } from './types.js';
/**
 * HTTP client with batching for the Lamdis event ingestion API.
 *
 * Buffers events in memory and flushes them in batches either:
 * - When the batch reaches maxBatchSize
 * - When flushIntervalMs elapses
 * - When flush() is called explicitly
 */
export declare class EventClient {
    private buffer;
    private timer;
    private readonly endpoint;
    private readonly apiKey;
    private readonly maxBatchSize;
    private readonly flushIntervalMs;
    private readonly maxRetries;
    private readonly debug;
    constructor(config: LamdisConfig);
    /**
     * Add an event to the buffer. Triggers flush if batch size reached.
     */
    enqueue(event: LamdisEvent): Promise<void>;
    /**
     * Flush all buffered events to the ingestion API.
     */
    flush(): Promise<void>;
    /**
     * Flush remaining events and stop the periodic timer.
     */
    shutdown(): Promise<void>;
    private sendBatch;
    private logError;
}
//# sourceMappingURL=client.d.ts.map