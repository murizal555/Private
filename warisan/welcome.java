class welcome{

    String nama;
    String mk;
    String sks;
    String khs;
    String nilai;

    public void setNama(String nama){
        this.nama=nama;
    }
    public String getnama(){
        return nama;
    }
    public static void main(String[]args){
        khs k=new khs();
        k.setNama("rizky budi");
        System.out.println("nama mahasiswa =" +k.getnama());
    }
}