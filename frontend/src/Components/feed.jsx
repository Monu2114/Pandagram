import Post from "./post";
export default function feed() {
  let images = [{ img: "panda.jpg", description: "I love sugarcanes !!" }];
  return (
    <div className="flex flex-col">
      {images.map((post, index) => {
        return (
          <Post key={index} description={post.description} image={post.img} />
        );
      })}
    </div>
  );
}
