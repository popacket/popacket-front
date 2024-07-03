export interface ShipmentResponse
{
    id: number;
    packageId: number;
    originLocationId: number;
    destinationLocationId: number;
    status: string;
    pickupDateTime: string;
    deliveryDateTime: string;
    deliveryPersonId: number;
    shippingRateId: number;
}