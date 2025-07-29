import React, { useState } from "react";

const Cards = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");

  const handleDelete = async (id) => {
    setIdToDelete(id);
    setShowDelete(true);
  };

  const confirmDelete = async () => {
    if (!idToDelete) {
      console.log("No ID to delete was ");
      setShowDelete(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/restaurants/" + idToDelete,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log(`รายการ : ${idToDelete} ถูกลบแล้ว`);
      } else {
        console.error("Failed to delete item:", response.status);
        alert("เกิดข้อผิดพลาดในการลบข้อมูล");
      }
    } catch (error) {
      console.log("เกิดข้อผิดพลาด: ", error);
    } finally {
      setShowDelete(false);
      setIdToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDelete(false);
    setIdToDelete(null);
  };

  return (
    <div className="card w-96 bg-white shadow-xl hover:shadow-2xl transition duration-300 border border-pink-200">
      <figure className="h-60 bg-gray-100 overflow-hidden">
        <img
          src={props.img}
          alt={props.title}
          className="object-cover w-full h-full"
          onError={(e) => (e.target.src = "/fallback-image.png")}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-pink-600">
          {props.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-gray-600">{props.type}</p>

        <div className="card-actions justify-end mt-4 space-x-2">
          <button
            onClick={() => handleDelete(props.id)}
            className="btn btn-error btn-sm"
          >
            ลบ
          </button>
          <a href={`/update/${props.id}`} className="btn btn-warning btn-sm">
            แก้ไข
          </a>
        </div>
      </div>

      {showDelete && (
        <dialog className="modal modal-open">
          <div className="modal-box bg-pink-500 text-white">
            <h3 className="font-bold text-lg">ยืนยันการลบข้อมูล</h3>
            <p className="py-4">
              คุณแน่ใจหรือไม่ว่าต้องการลบรายการ{" "}
              <span className="font-bold">"{props.title}"</span>?
            </p>
            <div className="modal-action">
              <button className="btn btn-error" onClick={confirmDelete}>
                ยืนยันการลบ
              </button>
              <button
                className="btn btn-outline btn-white"
                onClick={cancelDelete}
              >
                ยกเลิก
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={cancelDelete}>ปิด</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default Cards;
