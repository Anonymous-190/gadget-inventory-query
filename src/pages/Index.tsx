import CodingInterface from "@/components/CodingInterface";

const problemDescription = `Create a class Gadget with the below attributes:
modelNumber -int
stock -int
type -String
brand -String

Write getters, setters, and a parameterized constructor in the above-mentioned attribute sequence as required.

Create a class Solution with the main method.
Implement two static methods:
countTotalStockForType and findGadgetByBrandAndModel in the Solution class.

countTotalStockForType method:
This method takes an array of Gadget objects and a String parameter type. It should return the total stock of gadgets that match the given type. If no gadgets of the given type are found, return 0.

findGadgetByBrandAndModel method:
This method takes three parameters, an array of Gadget objects, a String brand, and an int modelNumber.
It should return the Gadget object that matches both brand and modelNumber. If either condition is not met, return null.

These methods should be called from the main method.
Write code to perform the following tasks:

Take necessary input variable and call countTotalStockForType. For this method - The main method should print the count of stock for the input type, if the input type is found, or it should print "No Gadget found with mentioned attribute."

Take necessary input variable and call findGadgetByBrandAndModel. For this method - The main method should print the Gadget object details as mentioned in the sample output, if the returned value is not null, or it should print "No Gadget found with mentioned attribute."

The above mentioned static methods should be called from the main method. Also write the code for accepting the inputs and printing the outputs. Don't use any static test or formatting for printing the result. Just invoke the method and print the result

Note: All String comparison needs to be case in-sensitive

You can use/refer the below given sample input and output to verify your solution.

Sample Input 1:
5
1001
15
Smartphone
Samsung
1002
20
Tablet
Apple
1003
18
Smartphone
OnePlus
1004
12
Laptop
Dell
1005
10
Smartphone
Motorola
Smartphone
Samsung
1001

Sample Output 1:
43
15-Smartphone

Sample Input 2:
5
2001
8
Smartwatch
Noise
2002
10
Smartwatch
Boat
2003
7
Earbuds
Sony
2004
6
Earbuds
JBL
2005
9
Tablet
Lenovo
Smartwatch
Apple
2006

Sample Output 2:
18
No Gadget found with mentioned attribute.`;

const solutionCode = `import java.util.*;

class Gadget {
    private int modelNumber;
    private int stock;
    private String type;
    private String brand;

    // Parameterized constructor
    public Gadget(int modelNumber, int stock, String type, String brand) {
        this.modelNumber = modelNumber;
        this.stock = stock;
        this.type = type;
        this.brand = brand;
    }

    // Getters
    public int getModelNumber() {
        return modelNumber;
    }

    public int getStock() {
        return stock;
    }

    public String getType() {
        return type;
    }

    public String getBrand() {
        return brand;
    }

    // Setters
    public void setModelNumber(int modelNumber) {
        this.modelNumber = modelNumber;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}

public class Solution {

    public static int countTotalStockForType(Gadget[] gadgets, String type) {
        int totalStock = 0;
        for (Gadget g : gadgets) {
            if (g.getType().equalsIgnoreCase(type)) {
                totalStock += g.getStock();
            }
        }
        return totalStock;
    }

    public static Gadget findGadgetByBrandAndModel(Gadget[] gadgets, String brand, int modelNumber) {
        for (Gadget g : gadgets) {
            if (g.getBrand().equalsIgnoreCase(brand) && g.getModelNumber() == modelNumber) {
                return g;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        Gadget[] gadgets = new Gadget[n];

        for (int i = 0; i < n; i++) {
            int modelNumber = Integer.parseInt(sc.nextLine());
            int stock = Integer.parseInt(sc.nextLine());
            String type = sc.nextLine();
            String brand = sc.nextLine();
            gadgets[i] = new Gadget(modelNumber, stock, type, brand);
        }

        String searchType = sc.nextLine();
        String searchBrand = sc.nextLine();
        int searchModel = Integer.parseInt(sc.nextLine());

        int stockCount = countTotalStockForType(gadgets, searchType);
        if (stockCount > 0) {
            System.out.println(stockCount);
        } else {
            System.out.println("No Gadget found with mentioned attribute.");
        }

        Gadget result = findGadgetByBrandAndModel(gadgets, searchBrand, searchModel);
        if (result != null) {
            System.out.println(result.getStock() + "-" + result.getType());
        } else {
            System.out.println("No Gadget found with mentioned attribute.");
        }

        sc.close();
    }
}`;

const Index = () => {
  return (
    <CodingInterface
      problem={{
        title: "Java: SBQ_Gadget",
        description: problemDescription,
      }}
      solution={{
        code: solutionCode,
        language: "Java",
      }}
    />
  );
};

export default Index;
