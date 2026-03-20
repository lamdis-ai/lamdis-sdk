import { EventClient } from './client.js';
import { WorkflowInstance } from './instance.js';
export { uuidv7 } from './uuidv7.js';
export { extractInstanceId, propagationHeaders, expressMiddleware, fastifyPlugin } from './middleware.js';
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
 * await instance.emit('message.received', { content: msg });
 * await instance.emit('tool.invoked', { tool: 'closeAccount' });
 * await instance.complete();
 *
 * // On shutdown
 * await lamdis.shutdown();
 * ```
 */
export class Lamdis {
    client;
    environment;
    source;
    constructor(config) {
        this.client = new EventClient(config);
        this.environment = config.environment ?? 'production';
    }
    /**
     * Start a new workflow instance.
     *
     * Returns a handle with a UUIDv7 distributed ID.
     * All events emitted via this handle are correlated.
     *
     * @param workflowKey - The workflow name/key (e.g., 'customer-requests-close-account')
     * @param source - Optional source identifier for the emitting service
     */
    startWorkflow(workflowKey, source) {
        return new WorkflowInstance(this.client, workflowKey, this.environment, source ?? this.source);
    }
    /**
     * Resume an existing workflow instance (e.g. from a different request
     * using the x-lamdis-instance-id header).
     *
     * @param instanceId - The existing workflow instance ID to resume
     * @param workflowKey - The workflow name/key
     * @param source - Optional source identifier for the emitting service
     */
    resumeWorkflow(instanceId, workflowKey, source) {
        return new WorkflowInstance(this.client, workflowKey, this.environment, source ?? this.source, instanceId);
    }
    /**
     * Flush all buffered events and stop the SDK.
     * Call this on process shutdown.
     */
    async shutdown() {
        await this.client.shutdown();
    }
}
//# sourceMappingURL=index.js.map