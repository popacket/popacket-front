export interface ShipmentRequest {
    packageId: number;
    originLocationId: number;
    destinationLocationId: number;
    status: string;
    deliveryPersonId: number;
}