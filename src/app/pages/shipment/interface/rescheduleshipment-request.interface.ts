export interface RescheduleShipmentRequest {
    packageId: number;
    pickupDateTime: string;  // Formato ISO-8601
    deliveryDateTime: string; // Formato ISO-8601
}
