import CodingInterface from "@/components/CodingInterface";

const vehicleDescription = `Java: SBQ_Vehicle
Title: Vehicle

Create a class Vehicle with below attributes:
registrationNumber - int
quantity - int
type - String
brand - String

Write getters, setters and parameterized constructor in the above mentioned attribute sequence as required.

Create class Solution with main method
Implement two static methods - getAverageQuantityByType and searchVehicleWithBrandPrefix in Solution class.

getAverageQuantityByType:
Create a static method getAverageQuantityByType in the Solution class. This method will take array of Vehicle objects and a string parameter type as input and returns the average quantity of all vehicles that match the given type. If no vehicle with the given type is found, return 0.

searchVehicleWithBrandPrefix:
Create a static method searchVehicleWithBrandPrefix in the Solution class. This method will take array of Vehicle objects and String parameter brandPrefix as input and returns the first Vehicle object where the brand name starts with the given prefix. If no matching brand is found, return null.

These methods should be called from the main method.
Write code to perform the following tasks:

1. Take necessary input variable and call getAverageQuantityByType. For this method - The main method should print the average of the given attribute of Vehicle object as it is if the returned value is greater than 0, or it should print "No vehicles found for the given type"

2. Take necessary input variable and call searchVehicleWithBrandPrefix. For this method - The main method should print the Vehicle object details as mentioned in the sample output, if the returned value is not null, or it should print "No vehicle found with the given brand prefix"

The above mentioned static methods should be called from the main method. Also write the code for accepting the inputs and printing the outputs. Don't use any static test or formatting for printing the result. Just invoke the method and print the result

Note:
All String comparison needs to be case in-sensitive

You can use/refer the below given sample input and output to verify your solution.

Sample Input (below) description:
The 1st input taken in the main section is the number of Vehicle objects to be added to the list of Vehicle.
The next set of inputs are registrationNumber, quantity, type, brand for each Vehicle object taken one after other and is repeated for number of Vehicle objects given in the first line of input.
The last line of inputs will be the arguments which needs to be passed as parameter to the methods.

Sample Input 1:
5
101
5
Car
Hyundai
102
3
Bike
Yamaha
103
7
Car
Honda
104
4
Truck
Tata
105
6
Bike
Bajaj
Car
Ho

Sample Output 1:
6
103-7-Car-Honda

Sample Input 2:
5
201
4
Truck
Mahindra
202
3
Bike
Hero
203
2
Truck
AshokLeyland
204
5
Bike
TVS
205
7
Car
Kia
Bike
Hyu

Sample Output 2:
4
No vehicle found with the given brand prefix`;

const vehicleSolution = `import java.util.*;

class Vehicle {
    private int registrationNumber;
    private int quantity;
    private String type;
    private String brand;

    // Constructor
    public Vehicle(int registrationNumber, int quantity, String type, String brand) {
        this.registrationNumber = registrationNumber;
        this.quantity = quantity;
        this.type = type;
        this.brand = brand;
    }

    // Getters
    public int getRegistrationNumber() {
        return registrationNumber;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getType() {
        return type;
    }

    public String getBrand() {
        return brand;
    }

    // Setters
    public void setRegistrationNumber(int registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}

public class Solution {

    public static double getAverageQuantityByType(Vehicle[] vehicles, String type) {
        int sum = 0;
        int count = 0;

        for (Vehicle v : vehicles) {
            if (v.getType().equalsIgnoreCase(type)) {
                sum += v.getQuantity();
                count++;
            }
        }

        if (count > 0) {
            return (double) sum / count;
        } else {
            return 0;
        }
    }

    public static Vehicle searchVehicleWithBrandPrefix(Vehicle[] vehicles, String prefix) {
        for (Vehicle v : vehicles) {
            if (v.getBrand().toLowerCase().startsWith(prefix.toLowerCase())) {
                return v;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        Vehicle[] vehicles = new Vehicle[n];

        for (int i = 0; i < n; i++) {
            int reg = Integer.parseInt(sc.nextLine());
            int qty = Integer.parseInt(sc.nextLine());
            String type = sc.nextLine();
            String brand = sc.nextLine();
            vehicles[i] = new Vehicle(reg, qty, type, brand);
        }

        String searchType = sc.nextLine();
        String searchPrefix = sc.nextLine();

        double avgQty = getAverageQuantityByType(vehicles, searchType);
        if (avgQty > 0) {
            if (avgQty == (int) avgQty) {
                System.out.println((int) avgQty); // print without .0 if integer
            } else {
                System.out.println(avgQty);
            }
        } else {
            System.out.println("No vehicles found for the given type");
        }

        Vehicle result = searchVehicleWithBrandPrefix(vehicles, searchPrefix);
        if (result != null) {
            System.out.println(result.getRegistrationNumber() + "-" + result.getQuantity() + "-" +
                               result.getType() + "-" + result.getBrand());
        } else {
            System.out.println("No vehicle found with the given brand prefix");
        }

        sc.close();
    }
}`;

const Question3 = () => {
  return (
    <CodingInterface
      problem={{
        title: "Java: Vehicle Management System",
        description: vehicleDescription,
      }}
      solution={{
        code: vehicleSolution,
        language: "Java",
      }}
    />
  );
};

export default Question3;