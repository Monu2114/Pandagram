export default function post(props) {
  return (
    <div className="w-56 flex flex-col gap-y-2">
      <img src={props.image} alt="" />
      <div className="flex justify-between">
        <div className="flex size-6  gap-x-2">
          <img src="icons/like.svg" alt="" />
          <img src="icons/comment.svg" alt="" />
          <img src="icons/share.svg" alt="" />
        </div>
        <div className="size-6">
          <img src="icons/save.svg" alt="" />
        </div>
      </div>
      <div>
        <p className="text-black font-semibold">10,00 views</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
