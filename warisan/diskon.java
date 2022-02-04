import java.util.Scanner;
public class diskon {
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        int jumlah_lembar;
        System.out.println(input);
        System.out.println("harga=123");
        System.out.print("jumlah lembar=");
        jumlah_lembar=input.nextInt();

        System.out.println("=============");
        System.out.println("bayaran mu"+(jumlah_lembar*123));
        System.out.println("-----------------------");
        if (jumlah_lembar<100) {
            System.out.println("diskon=0 %");
            System.out.println("============");

            System.out.println("bayar="+(jumlah_lembar*123));
            System.out.println("-------------------");
        }else
        if (jumlah_lembar>=100 & jumlah_lembar<=1000) {
            System.out.println("=======================");
            System.out.println("diskon="+"10% ");
            System.out.println("=================");

            System.out.println("------------------");
            System.out.println("diskon="+"15%");
            System.out.println("=============");
            System.out.println("bayar="+(jumlah_lembar*123-(jumlah_lembar*15/100)));
            System.out.println("==============");
        }
        else{
            System.out.println("tidak ada diskon");
        }
    }
    
}