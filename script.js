//get the data...
let users =[
    {
        profilepic: "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        displayPic: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location: "Kolkata, India",
        name: "Carlos",
        age: 20,
        interest: [{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, {
            icon:`<i class="ri-brush-fill"></i>`,
            interest: "painting"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium totam explicabo veniam assumenda quia porro maiores debitis culpa cum.",
        isFriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1542190891-2093d38760f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        displayPic: "https://images.unsplash.com/photo-1595347080715-69a5f93cd60f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        pendingMessage: 5,
        location: "Siliguri, India",
        name: "Mark",
        age: 22,
        interest: [{
            icon:`<i class="ri-pen-nib-fill"></i>`,
            interest: "writing"
        }, {
            icon:`<i class="ri-book-2-fill"></i>`,
            interest: "reading"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium totam explicabo veniam assumenda quia porro maiores debitis culpa cum.",
        isFriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1520773514296-e8f92a6356fe?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 1,
        location: "Mumbai, India",
        name: "Luois",
        age: 25,
        interest: [{
            icon:`<i class="ri-refund-2-line"></i>`,
            interest: "trading"
        }, {
            icon:`<i class="ri-edit-circle-fill"></i>`,
            interest: "editing"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium totam explicabo veniam assumenda quia porro maiores debitis culpa cum.",
        isFriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1542996966-2e31c00bae31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        pendingMessage: 2,
        location: "Bengaluru, India",
        name: "Merma",
        age: 26,
        interest: [{
            icon:`<i class="ri-hotel-bed-fill"></i>`,
            interest: "sleeping"
        }, {
            icon:`<i class="ri-knife-blood-fill"></i>`,
            interest: "cooking"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium totam explicabo veniam assumenda quia porro maiores debitis culpa cum.",
        isFriend: null
    },
];

function select(elem){
    return document.querySelector(elem);
}


let curr=0;
let isAnimating = false;


function setData(index){
    select(".prfimg img").src = users[index].profilepic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interest.forEach(function(interest){
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
                        ${interest.icon}
                        <h3 class="text-lg tracking-tight">${interest.interest}</h3>
                    </div>`
    })
    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[index].bio;
}

(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;
    
    setData(curr);
    curr=2;
})();

function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let hatna= gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove(".incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    opacity: 1,
                    scale: 1
                })
                if(curr === users.length) curr=0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
        hatna.to(".maincard",{
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration:.9
        },"a")
        .from(".incomingcard",{
            scale:.9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        },"a")
    }
}

let deny = select(".deny");
let accept = select(".accept");
deny.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .ee",{
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
});
accept.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .ee",{
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
});


(function containerCreator(){
    document.querySelectorAll(".ee")
    .forEach(function(ee){
        let div = document.createElement("div");
        div.classList.add(`${ee.classList[1]}container`,'overflow-hidden');
        div.appendChild(ee);
        select(".details").appendChild(div);
    })
})();

