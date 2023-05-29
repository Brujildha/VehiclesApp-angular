import { VehicleType } from "./vehicleType";

export interface Vehicle {
    vehicleType: VehicleType;
    price: number;
    description: string;
    available: boolean;
    vehicleTypeId: string;
}
