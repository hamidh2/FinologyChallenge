import { createContext } from "react";
import PeopleMock from "../mock/people";

export const PeopleContext = createContext(PeopleMock);

export const SelectedPersonContext = createContext();

 