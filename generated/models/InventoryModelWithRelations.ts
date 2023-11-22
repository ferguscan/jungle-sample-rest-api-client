/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductModel } from './ProductModel';

/**
 * (tsType: InventoryModelWithRelations, schemaOptions: { includeRelations: true })
 */
export type InventoryModelWithRelations = {
    /**
     * The quantity of this product available at the location
     */
    available: number;
    /**
     * ID of the location where this inventory is located
     */
    locationId: string;
    /**
     * Stock keeping unit of the inventory
     */
    sku: string;
    product?: ProductModel;
};

