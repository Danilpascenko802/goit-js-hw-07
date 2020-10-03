console.log('TASK 3');
const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  const gallery = document.getElementById('gallery');
  // console.log(gallery); 
  const img = document.createElement('img');
  console.log(img);
  // console.log(img.style);
  // img.style.width = 60;
  // img.style.height = 60;
  for(let i = 0; i<images.length; i+=1){
    // img.style.width = 60 + "px";
    // img.style.height = 60 + "px";
    img.setAttribute('height', 60 + 'px')
    img.setAttribute('width', 60 + 'px')
      img.setAttribute('alt', images[i].alt)
      img.setAttribute('url', images[i].url);
      // console.log(images[i].alt);
      // console.log(images[i].width);
    gallery.insertAdjacentElement("beforebegin", img)
    console.log(img);
  };
  // console.log(img.style.width); // ""
  // console.log(img.style.height);// ""  