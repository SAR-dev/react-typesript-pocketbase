import React from 'react'

function Testing() {
    return (
        <div className="p-5">
            <div className='flex flex-col gap-5 w-[30rem]'>
                <button className="btn btn-info">Welcome To Note Box</button>
                <input type="text" placeholder="Give a title..." className="input input-bordered input-sm w-full" />
                <textarea
                    className="textarea textarea-bordered"
                    placeholder="Start typing here..."
                    rows={5}
                ></textarea>
                <div className="flex">
                    <select className="select select-sm select-bordered w-1/3">
                        <option disabled selected>Select Folder</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <div className="flex flex-row gap-5 ml-auto">
                        <button className="btn btn-sm btn-square border border-gray-300">
                            <img className='h-5 w-5' src="https://img.icons8.com/color/48/siren.png" alt="save" />
                        </button>
                        <button className="btn btn-sm btn-square border border-gray-300">
                            <img className='h-5 w-5' src="https://img.icons8.com/fluency/48/attach.png" alt="save" />
                        </button>
                        <button className="btn btn-sm btn-square border border-gray-300">
                            <img className='h-5 w-5' src="https://img.icons8.com/scribby/50/pin.png" alt="save" />
                        </button>
                        <button className="btn btn-sm btn-square border border-gray-300">
                            <img className='h-5 w-5' src="https://img.icons8.com/scribby/50/image.png" alt="save" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-5">
                    <button className="btn btn-sm border border-gray-300 w-full">
                        <img className='h-5 w-5' src="https://img.icons8.com/fluency/48/save.png" alt="save" />
                        Save Note
                    </button>
                </div>
                <div>
                <progress className="progress w-full"></progress>
                </div>
            </div>

            <div className="w-[30rem] p-5 border border-bray-300 rounded mt-10">
                <div className="flex flex-col gap-5">
                    <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate, aperiam odit earum facere, ea placeat expedita iure, voluptatem necessitatibus eos sit pariatur. Iste consequuntur exercitationem perferendis eveniet consectetur deleniti?</div>
                    <img className='w-full h-96 object-cover rounded' src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/461849872_842160961366044_1588148800725987632_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGZY84TT4jjfbTrTALaHU_aHvxpO8LXS6ce_Gk7wtdLpz3rLeaRIHaLOgyzUYWCqIxf-Y8bm_QAazfOfIqIKvml&_nc_ohc=YkgqyX4-4IkQ7kNvgFhPER2&_nc_ht=scontent.fdac135-1.fna&_nc_gid=ATOTGmcg28qGgAZBRYXPp42&oh=00_AYDt55jG-jYFHq2-eKbKzcQ7bTXNoDXWTP2V1pYSm97THg&oe=6704A016" alt="" />
                    <div className="flex flex-row gap-5">
                        <button className="btn btn-sm flex-1">Like</button>
                        <button className="btn btn-sm flex-1">Comment</button>
                        <button className="btn btn-sm flex-1">Share</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testing