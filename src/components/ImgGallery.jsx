export default function ImgGallery() {
const redirectToPage = (url) => {
window.location.href = url;
};
return (
<section className="img">
<a className="img-img-1 cursor-pointer" onClick={() => redirectToPage("#")}>
    <img src="img/PS4pro.jpg" alt="gallery PS4pro" />
</a>
<a className="img-img-2 cursor-pointer" onClick={() => redirectToPage("#")}>
    <img src="img/PC gamer2.jpg" alt="gallery PC gamer2" />
</a>
<a className="img-img-3 cursor-pointer" onClick={() => redirectToPage("#")}>
    <img src="img/Samsung.jpg" alt="gallery Samsung" />
</a>
<a className="img-img-4 cursor-pointer" onClick={() => redirectToPage("#")}>
    <img src="img/portatil-samsung.jpg" alt="gallery portatil-samsung" />
</a>
<a className="img-img-5 cursor-pointer" onClick={() => redirectToPage("#")}>
    <img src="img/auriculares.jpg" alt="gallery auriculares" />
</a>
</section>
);
}
