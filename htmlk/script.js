let quotes = [
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", wiki: "https://en.wikipedia.org/wiki/Oscar_Wilde",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Oscar_Wilde_by_Napoleon_Sarony._Three-quarter-length_photograph%2C_seated.jpg/960px-Oscar_Wilde_by_Napoleon_Sarony._Three-quarter-length_photograph%2C_seated.jpg"},
    { quote: "I'm selfish, impatient and a little insecure...", author: "Marilyn Monroe", wiki: "https://en.wikipedia.org/wiki/Marilyn_Monroe",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Monroecirca1953.jpg/500px-Monroecirca1953.jpg"},
    { quote: "So many books, so little time.", author: "Frank Zappa", wiki: "https://en.wikipedia.org/wiki/Frank_Zappa",img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Zappa_16011977_01_300.jpg"},
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein", wiki: "https://en.wikipedia.org/wiki/Albert_Einstein",img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"},
    { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero", wiki: "https://en.wikipedia.org/wiki/Cicero",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bust_of_Cicero_%281st-cent._BC%29_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg/500px-Bust_of_Cicero_%281st-cent._BC%29_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg"},
    { quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch",wiki: "https://en.wikipedia.org/wiki/Bernard_Baruch",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/BARUCH%2C_BERNARD_2.jpg/500px-BARUCH%2C_BERNARD_2.jpg"},
    { quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss",wiki: "https://en.wikipedia.org/wiki/Dr._Seuss",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Theodor_Seuss_Geisel_%2801037v%29.jpg/500px-Theodor_Seuss_Geisel_%2801037v%29.jpg"},
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West",wiki: "https://en.wikipedia.org/wiki/Mae_West",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Mae_West_LAT.jpg/500px-Mae_West_LAT.jpg"},
    { quote: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain",wiki: "https://en.wikipedia.org/wiki/Mark_Twain",img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg"},
    { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard",wiki: "https://en.wikipedia.org/wiki/Elbert_Hubbard",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Elbert_Hubbard_-_Project_Gutenberg_eText_12933.jpg/500px-Elbert_Hubbard_-_Project_Gutenberg_eText_12933.jpg"}
];

let shownQuotes = [];

function quotse() {
    for (let i = 0; i < quotes.length; i++) {
        if (!shownQuotes.includes(i)) {
            document.getElementById("quote").innerText = `"${quotes[i].quote}"`;
            document.getElementById("author").innerHTML = `— <a href="${quotes[i].wiki}" target="_blank">${quotes[i].author}</a>`;
            document.getElementById("img").src=quotes[i].img;
            shownQuotes.push(i);
            break;
        }
    }

    if (shownQuotes.length === quotes.length) {
        shownQuotes = [];
    }
}
function quotse1(){
    const Quote1 = document.getElementById("Quote1").value;
    const Author1 = document.getElementById("Author1").value;
    const Wiki1 = document.getElementById("Wiki1").value;

    if(Quote1==""||Author1==""){
        alert("Please Qoute and Author are Requierd ⛔!");
        return;
    }
    quotes.push({
        quote: Quote1,
        author: Author1,
        wiki: Wiki1 || "#"
    });

    document.getElementById("Quote1").value = "";
    document.getElementById("Author1").value = "";
    document.getElementById("Wiki1").value = "";

    alert("Quote added successfully ✅!");
}

document.getElementById("btn").addEventListener("click", function(){
   quotse() ;
   document.getElementById("img").style.display="block";
});
document.getElementById("btn2").addEventListener("click", function(){
    document.getElementById("qoutess").style.display = "block";
});
document.getElementById("btn3").addEventListener("click", function() {
    quotse1();
    document.getElementById("qoutess").style.display = "none";
});
document.getElementById("btn4").addEventListener("click",function(){
    document.getElementById("qoutess").style.display="none";
})
