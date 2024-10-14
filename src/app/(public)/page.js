export default function About() {
  return(
      <>
        <div className="flex mt-16">
                <div className="md:w-3/4 px-4 ">
                    <div className="rounded-xl">
                        <h2 className="text-left text-5xl w-full font-extrabold">Hello</h2>
                        <h3 className="text-left text-2xl w-full font-bold">I Am <span class="text-blue-600">Ahmad Khairul Arifin</span></h3>
                        <h3 className="w-1/2">Saya seorang mahasiswa aktif Politeknik LP3I Jakarta Semester 5</h3>
                      <div className="w-full py-2">
                            <button className="mx-1 h-9 items-center justify-center px-4  rounded-md bg-amber-500">
                                <a href="/contact"><label>Contact</label></a>
                                
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3">
                <img class="" src="/images/image1.jpg"></img>
                </div>
            </div>
      </>
  );
}