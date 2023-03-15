import { Subject } from 'rxjs';

export class ProductsDataService {
  products = [
    {
      imagePath: 'https://cdn.mos.cms.futurecdn.net/JN4id4eQ79r4c4JzHVNtH5.jpg',
      name: 'SONY Alpha ILCE-6000Y/b in5 Mirrorless Camera Body with Dual Lens : 16-50 mm & 55-210 mm',
      rating: '4.5',
      ratingNumber: '1,729',
      reviewNumber: '4,484',
      spects: [
        ' Effective Pixels: 24.3 MP',
        'Sensor Type: CMOS',
        ' WiFi Available',
        ' 2 Years Sony India Warranty & Free Transit insurance',
      ],
      price: '53,990',
      originalPrice: '61,490',
      discountAmount: '7,500',
      imageGallery: [
        'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHNsciUyMGNhbWVyYXxlbnwwfHwwfHw%3D&w=1000&q=80',
        'https://www.amateurphotographer.co.uk/wp-content/uploads/2022/04/panasonic-lumix-gh6-P1014452.jpeg',
        'https://media.istockphoto.com/photos/camera-lens-with-red-and-blue-backlight-macro-photography-lenses-picture-id1187951204?k=20&m=1187951204&s=612x612&w=0&h=t1jUkNsyuU7tVnOLI_Qpch8UOMhCh8MZ3PqA216Zwts=',
        'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHNsciUyMGNhbWVyYXxlbnwwfHwwfHw%3D&w=1000&q=80',
        'https://www.amateurphotographer.co.uk/wp-content/uploads/2022/04/panasonic-lumix-gh6-P1014452.jpeg',
        'https://media.istockphoto.com/photos/camera-lens-with-red-and-blue-backlight-macro-photography-lenses-picture-id1187951204?k=20&m=1187951204&s=612x612&w=0&h=t1jUkNsyuU7tVnOLI_Qpch8UOMhCh8MZ3PqA216Zwts=',
      ],
      offers: [
        'Bank Offer7% Instant Discount on EMI transactions using YES bank Credit cardsT&C',
        'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C',
        'Bank OfferFlat ₹75 discount on UPI transaction above ₹10,000 in a single cart valueT&C',
        'Partner OfferGST Invoice Available! Save up to 28% for business purchasesKnow More',
      ],
    },
    {
      imagePath:
        'https://i.pcmag.com/imagery/roundups/018cwxjHcVMwiaDIpTnZJ8H-22..v1570842461.jpg',
      name: 'SONY Alpha ILCE-6400 Mirrorless Camera (Body Only)  (Black)',
      rating: '4.7',
      ratingNumber: '321',
      reviewNumber: '47',
      spects: [
        'Effective Pixels: 24.2 MP',
        'Sensor Type: CMOS',
        ' WiFi Available',
        'NTSC/PAL',
      ],
      price: '70,990',
      originalPrice: '80,490',
      discountAmount: '9,500',
      imageGallery: [
        'https://rukminim1.flixcart.com/image/832/832/k3q76a80/camera/7/9/u/sony-apsc-ilce-6600-b-in5-mirrorless-original-imafm6mtahhva36r.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/832/832/k3q76a80/camera/7/9/u/sony-apsc-ilce-6600-b-in5-mirrorless-original-imafmsk4j8bvqf9y.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/832/832/k3q76a80/camera/7/9/u/sony-apsc-ilce-6600-b-in5-mirrorless-original-imafmsk4fska2yvd.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/832/832/k3q76a80/camera/7/9/u/sony-apsc-ilce-6600-b-in5-mirrorless-original-imafmsk4wn6mffwk.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/832/832/k3q76a80/camera/7/9/u/sony-apsc-ilce-6600-b-in5-mirrorless-original-imafmsk4d3hxef3f.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/832/832/k3q76a80/camera/7/9/u/sony-apsc-ilce-6600-b-in5-mirrorless-original-imafmsk4yk4cmgue.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/832/832/k3q76a80/camera/7/9/u/sony-apsc-ilce-6600-b-in5-mirrorless-original-imafmsk4gjmcx3zf.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/832/832/k3q76a80/camera/7/9/u/sony-apsc-ilce-6600-b-in5-mirrorless-original-imafmsk4wt4e24ku.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/832/832/k3q76a80/camera/7/9/u/sony-apsc-ilce-6600-b-in5-mirrorless-original-imafmsk4fp53skex.jpeg?q=70',
      ],
      offers: [
        'Bank Offer7% Instant Discount on EMI transactions using YES bank Credit cardsT&C',
        'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C',
        'Bank OfferFlat ₹75 discount on UPI transaction above ₹10,000 in a single cart valueT&C',
        'Partner OfferGST Invoice Available! Save up to 28% for business purchasesKnow More',
      ],
    },
  ];

  activatedWishlist = new Subject();
}
