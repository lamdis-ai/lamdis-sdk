import type { LamdisConfig, WorkflowHandle } from './types.js';
export { uuidv7 } from './uuidv7.js';
export { extractInstanceId, propagationHeaders, expressMiddleware, fastifyPlugin } from './middleware.js';
export type { LamdisConfig, LamdisEvent, IngestResponse, WorkflowHandle, EmitOptions, ConfirmationLevel, Environment, } from './types.js';
/**
 * Main Lamdis SDK client.
 *
 * @example
 * ```ts
 * import { Lamdis } from '@lamdis/sdk';
 *
 * const lamdis = new Lamdis({
 *   apiKey: process.env.LAMDIS_API_KEY!,
 *   endpoint: 'https://ingest.lamdis.com',
 *   environment: 'production',
 * });
 *
 * const instance = lamdis.startWorkflow('customer-requests-close-account');
 * await instance.emit('message.received', { content: msg }, { level: 'A' });
 * await instance.emit('tool.invoked', { tool: 'closeAccount' }, { level: 'B' });
 * await instance.complete();
 *
 * // On shutdown
 * await lamdis.shutdown();
 * ```
 */
export declare class Lamdis {
    private readonly client;
    private readonly environment;
    private readonly source?;
    constructor(config: LamdisConfig);
    /**
     * Start a new workflow instance.
     *
     * Returns a handle with a UUIDv7 distributed ID.
     * All events emitted via this handle are correlated.
     *
     * @param workflowKey - The workflow name/key (e.g., 'customer-requests-close-account')
     * @param source - Optional source identifier for the emitting service
     */
    startWorkflow(workflowKey: string, source?: string): WorkflowHandle;
    /**
     * Flush all buffered events and stop the SDK.
     * Call this on process shutdown.
     */
    shutdown(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map