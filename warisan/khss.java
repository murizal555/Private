class khs{
	String nama;
	String mk;
	int sks;
	int nilai;

	public void setNama(String nama){
		this.nama=nama;
	}
	public void setMk(String mk){
		this.mk=mk;
	}
	public void setSks( int sks){
		this.sks=sks;
	}
	public void setNilai(int nilai){
		this.nilai=nilai;
	}
	public String getnama(){
		return nama;
	}
	public String getmk(){
		return mk;
	}
	public int getsks(){
		return sks;
	}
	public int getnilai(){
		return nilai;
	}

	public static void main(String[] args) {
		khs k=new khs();
		k.setNama("rizki budy");
		System.out.println("nama mahasiswa=" + k.getnama());
		k.setMk("Pemrograman berorientasi objek");
		System.out.println("Matakuliah=" + k.getmk());
		k.setSks(3);
		System.out.println("sks=" + k.getsks());
		k.setNilai(90);
		System.out.println("nilai=" + k.getnilai());	
	}
}