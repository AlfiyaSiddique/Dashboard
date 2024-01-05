import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCircle,
  faClock,
  faComment,
  faDotCircle,
  faEllipsis,
  faEllipsisV,
  faSquarePlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
faEllipsisV;
import contentInfo from "./contentInfo";
import Image from "next/image";

function Content() {
  return (
    <div id="content">
      <div id="title" className="bg-[#15132B] text-white m-4 mr-8 p-4 rounded">
        <div className="flex justify-between m-3">
          <div className="flex">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="mx-4" />
            <div>
              <h1>
                <strong>School November Tasks</strong>
              </h1>
              <span className="text-xs text-[#A5A5A5]">
                Created instructor Day on November 31, 2022
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h3>Centered Martial Arts</h3>
              <span className="text-[#A5A5A5] text-xs">Sunnyvale, CA</span>
            </div>
            <div className="bg-white rounded m-2 mt-0">
              <Image src={"/logo.png"} width={35} height={20} />
            </div>
            <FontAwesomeIcon icon={faEllipsisV} className="mx-4 mt-2" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-around ml-14">
            <div>
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#C4C4C4] border rounded-lg border-black text-[18px]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#C4C4C4] border rounded-lg border-black relative right-1 text-[18px]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#C4C4C4] border rounded-lg border-black relative right-2 text-[18px]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#C4C4C4] border rounded-lg border-black relative right-3 text-[18px]"
              />
              <span className="bg-[#E328AF] text-white border rounded-[100%] border-black relative right-4 bottom-[2px] text-xs p-[3px]">
                5+
              </span>
            </div>
            <div className="bg-[#6418C3] px-2 py-1 mr-4 rounded">
              <FontAwesomeIcon icon={faUserPlus} className="mx-2 text-xs" />
              <span className="text-xs">Invite People</span>
            </div>
            <button className="border-[#6418C3] border px-2 py-1 mr-4 rounded text-xs">
              Private
            </button>
            <button className="bg-[#7879F1] px-2 py-1 mr-4 rounded text-xs">
              Edit
            </button>
            <div className="border-[#6418C3] border px-2 py-1 mr-4 rounded">
              <FontAwesomeIcon icon={faComment} className="mr-2" />
              <span className="text-xs">45 Comments</span>
            </div>
            <span className="text-xs ml-5 mt-2 mr-1">Total progress 60% </span>
            <div className="w-[200px] h-2 rounded-md bg-[#1E1C3A] mt-3">
              <div className="w-[80px] h-2 rounded-md bg-[#6418C3]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid bg-[#15132B] grid-cols-4 grid-rows-1 m-4 mr-8 p-4 text-white">
        <div>
          <div className="flex justify-between m-4 p-2">
            <span>
              <strong>To-Do List(24)</strong>
            </span>
            <span
              icon={faSquarePlus}
              className="bg-[#6418C3] px-2 py-1 rounded"
            >
              <strong>+</strong>
            </span>
          </div>
          <div>
            {contentInfo.todoist.map((task, index) => {
              return (
                <div
                  key={index}
                  className="m-4 bg-[#211A75] text-white p-3 rounded relative"
                >
                  <div className="flex">
                    <div
                      className={`w-2 h-2 rounded-[100%] m-1 self-center`}
                      style={{ backgroundColor: task.color }}
                    ></div>
                    <span style={{ color: task.color }}>{task.title}</span>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="self-center absolute right-2 top-3"
                    />
                  </div>
                  <p className="text-sm">{task.text}</p>
                  <div className="w-[180px] h-2 rounded-md bg-[#1E1C3A] mt-3">
                    <div
                      className="h-2 rounded-md"
                      style={{
                        backgroundColor: task.color,
                        width: task.completed,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex m-2">
                      {task.user.map((id) => {
                        return (
                          <div
                            key={id}
                            className={`w-4 h-4 bg-[#C4C4C4] border rounded-lg border-black relative right-${id}`}
                          ></div>
                        );
                      })}
                    </div>
                    <div className="my-2 text-xs text-[#A5A5A5]">
                      <FontAwesomeIcon icon={faClock} className="mx-1" />
                      <span>Due in 4 days</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex justify-between m-4 p-2">
            <span>
              <strong>In Progress(2)</strong>
            </span>
            <span
              icon={faSquarePlus}
              className="bg-[#6418C3] px-2 py-1 rounded"
            >
              <strong>+</strong>
            </span>
          </div>
          <div>
            {contentInfo.inprogress.map((task, index) => {
              return (
                <div
                  key={index}
                  className="m-4 bg-[#211A75] text-white p-3 rounded relative"
                >
                  <div className="flex">
                    <div
                      className={`w-2 h-2 rounded-[100%] m-1 self-center`}
                      style={{ backgroundColor: task.color }}
                    ></div>
                    <span style={{ color: task.color }}>{task.title}</span>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="self-center absolute right-2 top-3"
                    />
                  </div>
                  <p className="text-sm">{task.text}</p>
                  <div className="w-[180px] h-2 rounded-md bg-[#1E1C3A] mt-3">
                    <div
                      className="h-2 rounded-md"
                      style={{
                        backgroundColor: task.color,
                        width: task.completed,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex m-2">
                      {task.user.map((id) => {
                        return (
                          <div
                            key={id}
                            className={`w-4 h-4 bg-[#C4C4C4] border rounded-lg border-black relative right-${id}`}
                          ></div>
                        );
                      })}
                    </div>
                    <div className="my-2 text-xs text-[#A5A5A5]">
                      <FontAwesomeIcon icon={faClock} className="mx-1" />
                      <span>Due in 4 days</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex justify-between m-4 p-2">
            <span>
              <strong>Done(3)</strong>
            </span>
            <span
              icon={faSquarePlus}
              className="bg-[#6418C3] px-2 py-1 rounded"
            >
              <strong>+</strong>
            </span>
          </div>
          <div>
            {contentInfo.done.map((task, index) => {
              return (
                <div
                  key={index}
                  className="m-4 bg-[#211A75] text-white p-3 rounded relative"
                >
                  <div className="flex">
                    <div
                      className={`w-2 h-2 rounded-[100%] m-1 self-center`}
                      style={{ backgroundColor: task.color }}
                    ></div>
                    <span style={{ color: task.color }}>{task.title}</span>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="self-center absolute right-2 top-3"
                    />
                  </div>
                  <p className="text-sm">{task.text}</p>
                  <div
                    className="w-[180px] h-2 rounded-md mt-3"
                    style={{ backgroundColor: task.color }}
                  ></div>
                  <div className="flex justify-between">
                    <div className="flex m-2">
                      {task.user.map((id) => {
                        return (
                          <div
                            key={id}
                            className={`w-4 h-4 bg-[#C4C4C4] border rounded-lg border-black relative right-${id}`}
                          ></div>
                        );
                      })}
                    </div>
                    <div className="my-2 text-xs text-[#A5A5A5]">
                      <FontAwesomeIcon icon={faClock} className="mx-1" />
                      <span>Due in 4 days</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex justify-between m-4 p-2">
            <span>
              <strong>Completed (2)</strong>
            </span>
            <span
              icon={faSquarePlus}
              className="bg-[#6418C3] px-2 py-1 rounded"
            >
              <strong>+</strong>
            </span>
          </div>
          <div>
            {contentInfo.completed.map((task, index) => {
              return (
                <div
                  key={index}
                  className="m-4 bg-[#211A75] text-white p-3 rounded relative"
                >
                  <div className="flex">
                    <div
                      className={`w-2 h-2 rounded-[100%] m-1 self-center`}
                      style={{ backgroundColor: task.color }}
                    ></div>
                    <span style={{ color: task.color }}>{task.title}</span>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="self-center absolute right-2 top-3"
                    />
                  </div>
                  <p className="text-sm">{task.text}</p>
                  <div
                    className="w-[180px] h-2 rounded-md mt-3"
                    style={{ backgroundColor: task.color }}
                  ></div>
                  <div className="flex justify-between">
                    <div className="flex m-2">
                      {task.user.map((id) => {
                        return (
                          <div
                            key={id}
                            className={`w-4 h-4 bg-[#C4C4C4] border rounded-lg border-black relative right-${id}`}
                          ></div>
                        );
                      })}
                    </div>
                    <div className="my-2 text-xs text-[#A5A5A5]">
                      <FontAwesomeIcon icon={faClock} className="mx-1" />
                      <span>Due in 4 days</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
