export default function NotFound() {
    return (<div><h2>Page not found</h2>
        <p>Could not find requested resource</p></div>);
}


// "use client";
// import { usePathname } from "next/navigation";
// export default function NotFound() {
//     const pathname = usePathname();
//     const productId =  pathname.split("/")[2];
//     const reviewId =  pathname.split("/")[4];
//     return (<div><h2>Review {reviewId} not found for product{productId}</h2>
//         </div>);
// }


// import { notFound } from "next/navigation";
// if(parseInt(reviewID)>1000){notFound();}