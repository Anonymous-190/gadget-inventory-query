import CodingInterface from "@/components/CodingInterface";

const artGalleryDescription = `Xplore_Java_Coding_Challenge

Create a class ArtGallery with the following attributes:
paintingId - int
quantity - int
style - String
title - String

Write appropriate getters, setters, and a parameterized constructor.

Create a class Solution with a main method.
Implement the following two static methods in the Solution class.

public static int countTotalPaintingsForStyle (ArtGallery gallery[], String style)
This method should return the total quantity of paintings that match the given style i.e., it should sum the quantity attribute of all ArtGallery objects that match the provided style.
If no painting with the given style is found, the method should return 0.

public static ArtGallery findPaintingByTitleAndid (ArtGallery gallery[], String title, int paintingid)
This method should return the ArtGallery object if the title matches the painting's title and the paintingId matches exactly.
If any one or both conditions fail, return null.

In the main method():
Take input for the number of objects and take input for paintingId (int), quantity (int), style (String), title (String).
Take input for style to search total quantity and a title and paintingId to search for a specific painting.
Call the countTotalPaintingsForStyle method and If it returns a value greater than 0, print the value directly, otherwise print "The given style is not available".
Call the findPaintingByTitleAndid method and If a valid object is returned, print the object, otherwise print "The given title or painting ID is not available".

The above-mentioned static methods should be called from the main method. Also write the code for accepting the inputs and printing the outputs. Don't use any static test or formatting for printing the result. Just invoke the method and print the result.

Note:
All String comparison needs to be case in-sensitive

You can use/refer the below given sample input and output to verify your solution.

Sample Input 1:
5
101
5
Impressionism
Sunrise
102
3
Modern
Shadows
103
2
Impressionism
Lilies
104
4
Abstract
Chaos
105
6
Modern
Dreams
Impressionism
Lilies
103

Sample Output 1:
7
2-Impressionism

Sample Input 2:
5
201
10
Cubism
Shapes
202
5
Baroque
Lights
203
8
Gothic
Cathedral
204
4
Realism
Life
205
3
Surrealism
Dreams
Expressionism
Dreams
205

Sample Output 2:
The given style is not available
3-Surrealism`;

const artGallerySolution = `import java.util.*;

class ArtGallery {
    private int paintingId;
    private int quantity;
    private String style;
    private String title;

    // Constructor
    public ArtGallery(int paintingId, int quantity, String style, String title) {
        this.paintingId = paintingId;
        this.quantity = quantity;
        this.style = style;
        this.title = title;
    }

    // Getters
    public int getPaintingId() {
        return paintingId;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getStyle() {
        return style;
    }

    public String getTitle() {
        return title;
    }

    // Setters
    public void setPaintingId(int paintingId) {
        this.paintingId = paintingId;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}

public class Solution {
    
    public static int countTotalPaintingsForStyle(ArtGallery[] gallery, String style) {
        int total = 0;
        for (ArtGallery a : gallery) {
            if (a.getStyle().equalsIgnoreCase(style)) {
                total += a.getQuantity();
            }
        }
        return total;
    }

    public static ArtGallery findPaintingByTitleAndid(ArtGallery[] gallery, String title, int paintingId) {
        for (ArtGallery a : gallery) {
            if (a.getTitle().equalsIgnoreCase(title) && a.getPaintingId() == paintingId) {
                return a;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        ArtGallery[] gallery = new ArtGallery[n];

        for (int i = 0; i < n; i++) {
            int id = Integer.parseInt(sc.nextLine());
            int qty = Integer.parseInt(sc.nextLine());
            String style = sc.nextLine();
            String title = sc.nextLine();
            gallery[i] = new ArtGallery(id, qty, style, title);
        }

        String searchStyle = sc.nextLine();
        String searchTitle = sc.nextLine();
        int searchId = Integer.parseInt(sc.nextLine());

        int total = countTotalPaintingsForStyle(gallery, searchStyle);
        if (total > 0) {
            System.out.println(total);
        } else {
            System.out.println("The given style is not available");
        }

        ArtGallery result = findPaintingByTitleAndid(gallery, searchTitle, searchId);
        if (result != null) {
            System.out.println(result.getQuantity() + "-" + result.getStyle());
        } else {
            System.out.println("The given title or painting ID is not available");
        }

        sc.close();
    }
}`;

const Question2 = () => {
  return (
    <CodingInterface
      problem={{
        title: "Java: Art Gallery Management",
        description: artGalleryDescription,
      }}
      solution={{
        code: artGallerySolution,
        language: "Java",
      }}
    />
  );
};

export default Question2;