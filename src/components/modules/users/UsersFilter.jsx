import api from "../../../api";
import { useDispatch } from "react-redux";
import { setUsers } from "../../../store/modules/users";
import { useSearchParams } from "react-router-dom";
import { serializeParams, parseQuery } from "../../../services/query-string";
import { useState } from "react";
import { useForm } from "react-hook-form";

const UsersFilter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValues = parseQuery(searchParams.toString());

  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const submit = async (filters) => {
    try {
      updateFilters(filters);
      await loadData();
    } catch (e) {
      console.log(e);
    }
  };

  const updateFilters = (filters) => {
    setFilter(filters);
    const search = serializeParams(filters);
    setSearchParams(search);
  };

  const loadData = async () => {
    try {
      const { data } = await api.users().loadData(filter);
      dispatch(setUsers(data));
    } catch (e) {
      console.log(e);
    }
  };

  const handleReset = async () => {
    updateFilters({});
    reset();
    await loadData();
  };

  return (
    <form onSubmit={handleSubmit(submit)} onReset={handleReset}>
      <input type="text" {...register("name")} />
      <input type="text" {...register("date")} />
      <input type="text" {...register("number")} />
      <button type={"submit"}>submit</button>
      <button type={"reset"}>reset</button>
    </form>
  );
};

export default UsersFilter;
