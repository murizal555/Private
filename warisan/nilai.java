class nilai {
    String nama;
    String mk;
    int praktik=100;
    int uts=100;
    int uas=100;

    public void setNama(String nama){
        this.nama=nama;
        System.out.println("nama"+nama);
    }
        public String getNama(String nama){
            return nama;
        }
        public static void main(String[] args) {
            nilai k=new nilai();
            k.setNama("budi");
            System.out.println("nama mahasiswa="+k.getNama());
            k.setNama(nama);
            System.out.println("uts="+k.getNama(nama));
        }
    }


