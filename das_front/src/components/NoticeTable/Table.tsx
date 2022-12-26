import { useQuery } from "@tanstack/react-query";
import PageNation from "../PageNation/PageNation";
import TableElement from "./TableElement";
import TableHeader from "./TableHeader";
import notice from "../../Utils/api/Sign/Notice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IAllNotice } from "../../interfaces/Notice";

const Table = () => {
  const { data } = useQuery(["notice"], notice.getAllNotice);
  const [page, setPage] = useState(0);

  return (
    <>
      <TableHeader />
      <div style={{ minHeight: 600 }}>
        {data?.data.notice_response_list.slice(page * 15, page * 15 + 15).map((res: IAllNotice, i: number) => {
          const { notice_id, title, created_at, view_counts } = res;
          return (
            <Link to={`/notice/${notice_id}`} state={{ data: notice_id }} key={i}>
              <TableElement
                index={page * 15 + i + 1}
                notice_id={notice_id}
                title={title}
                created_at={created_at}
                view_counts={view_counts}
              />
            </Link>
          );
        })}
      </div>

      <div style={{ height: 100 }}></div>
      <PageNation page={page} setPage={setPage} data={data?.data.notice_response_list} maxNumber={15} />
      <div style={{ height: 200 }}></div>
    </>
  );
};

export default Table;
