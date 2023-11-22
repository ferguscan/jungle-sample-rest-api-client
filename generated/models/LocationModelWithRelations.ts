/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { XidModel } from './XidModel';

/**
 * (tsType: LocationModelWithRelations, schemaOptions: { includeRelations: true })
 */
export type LocationModelWithRelations = {
    /**
     * ID of this Location
     */
    id?: string;
    /**
     * Name of this Location
     */
    name: string;
    xids?: Array<XidModel>;
};

