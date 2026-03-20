/**
 * UUIDv7 generator — time-sortable, globally unique IDs.
 *
 * Format: tttttttt-tttt-7sss-vrrr-rrrrrrrrrrrr
 *   t = 48-bit Unix timestamp in milliseconds
 *   7 = version nibble
 *   s = 12-bit sub-millisecond random
 *   v = variant bits (10xx)
 *   r = 62 bits of random
 */
/**
 * Generate a UUIDv7 string.
 */
export declare function uuidv7(): string;
//# sourceMappingURL=uuidv7.d.ts.map