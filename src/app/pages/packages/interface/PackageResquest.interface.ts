export interface PackageRequest {
  senderId: number,
  recipientId: number,
  description: string,
  weight: number,
  status: string,
  paymentType: string,
  originAddress: string,
  destinationAddress: string,
}
