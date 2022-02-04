class harga{
    double harga_utama=20000;
    double harga_potongan=2000;
    double persentase;
    int beli;

    public void persentase_potongan(){
        persentase =(harga_utama/100)*15;
        System.out.println("potongan presentase= "+ persentase);

    }
    public void setBeli(int beli) {
        this.beli=beli;
    }
    public int getBeli() {
        return beli;
    }
    public void harga_setelah_dipotong(){
        double total_harga=(harga_utama-harga_potongan)-this.persentase;
        setBeli(2);
        double total_harga_beli=total_harga*getBeli();
        System.out.println("harga total="+ total_harga);
        System.out.println("hargaa total setelah beli= "+total_harga);
        System.out.println(total_harga_beli);

    }
    public static void main(String[] args) {
        harga h=new harga();
        h.harga_setelah_dipotong();
    }
}