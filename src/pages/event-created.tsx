import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Link } from "react-router-dom";
import Nav from "../atoms/Nav";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const EventCreated: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const inviteLink = "https://example.com/invite-link"; // Replace with your generated invite link

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="fixed inset-0 flex flex-col text-xl bg-[#000022] bg-opacity-50  ">
        <Nav />
        <Modal
          title={<span className="text-2xl">Event Created Successfully</span>}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Link to="/events/:id">
              <Button key="ok" type="primary" onClick={handleOk}>
                OK
              </Button>
            </Link>,
          ]}
          modalRender={(modal) => (
            <div className=" p-[6rem] rounded-2xl shadow-lg w-full h-full flex flex-col gap-[4rem] items-center justify-center">
              {modal}
            </div>
          )}
        >
          <p className="text-md py-8">
            Your event has been created successfully!
          </p>
          <p>
            <IoCheckmarkDoneOutline />

            <a href={inviteLink} target="_blank" rel="noopener noreferrer">
              {inviteLink}
            </a>
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default EventCreated;
