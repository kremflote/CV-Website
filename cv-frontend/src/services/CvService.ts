import axios, { type AxiosResponse } from "axios";
import type { ITenure } from "../interfaces/ITenure.ts";
import type { ISkill } from "../interfaces/ISkill";
import type { IShowcase } from "../interfaces/IShowcase";
import type {
  ITenureResponseList,
  ITenureResponseSingle,
  ISkillResponseList,
  ISkillResponseSingle,
  IShowcaseResponseList,
  IShowcaseResponseSingle,
} from "../interfaces/IServiceResponses.ts";

const tenureEndpoint = "/api/tenure";
const skillEndpoint = "/api/skill";
const showcaseEndpoint = "/api/showcase";

interface RawTenure {
  id: number;
  companyName?: string;
  company_Name?: string;
  workTitle?: string;
  work_Title?: string;
  startDate?: string;
  start_Date?: string;
  endDate?: string;
  end_Date?: string;
}

const normalizeTenure = (tenure: RawTenure): ITenure => ({
  id: tenure.id,
  companyName: tenure.companyName ?? tenure.company_Name ?? "",
  workTitle: tenure.workTitle ?? tenure.work_Title ?? "",
  startDate: tenure.startDate ?? tenure.start_Date ?? "",
  endDate: tenure.endDate ?? tenure.end_Date ?? "",
});

// --- TENURE ---

const getTenures = async (): Promise<ITenureResponseList> => {
  try {
    const response = await axios.get<ITenure[]>(tenureEndpoint);
    const validation = validateResponseList(response);

    if (!validation.isValid) {
      return { success: false, data: [], error: validation.error };
    }

    return { success: true, data: response.data.map(normalizeTenure) };
  } catch (error) {
    console.error("getTenures: Failed to fetch tenures:", error);
    return { success: false, data: [], error: "Error connecting to database" };
  }
};

const getTenureById = async (id: number): Promise<ITenureResponseSingle> => {
  try {
    const response = await axios.get<ITenure>(`${tenureEndpoint}/${id}`);
    const validation = validateResponseSingle(response);

    if (!validation.isValid) {
      return { success: false, data: null, error: validation.error };
    }

    return { success: true, data: normalizeTenure(response.data) };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return {
        success: true,
        data: null,
        error: "No tenure found with that ID.",
      };
    }
    console.error("getTenureById: Failed to fetch tenure:", error);
    return {
      success: false,
      data: null,
      error: "Error connecting to database",
    };
  }
};

// --- SKILL ---

const getSkills = async (): Promise<ISkillResponseList> => {
  try {
    const response = await axios.get<ISkill[]>(skillEndpoint);
    const validation = validateResponseList(response);

    if (!validation.isValid) {
      return { success: false, data: [], error: validation.error };
    }

    return { success: true, data: response.data };
  } catch (error) {
    console.error("getSkills: Failed to fetch skills:", error);
    return { success: false, data: [], error: "Error connecting to database" };
  }
};

const getSkillById = async (id: number): Promise<ISkillResponseSingle> => {
  try {
    const response = await axios.get<ISkill>(`${skillEndpoint}/${id}`);
    const validation = validateResponseSingle(response);

    if (!validation.isValid) {
      return { success: false, data: null, error: validation.error };
    }

    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return {
        success: true,
        data: null,
        error: "No skill found with that ID.",
      };
    }
    console.error("getSkillById: Failed to fetch skill:", error);
    return {
      success: false,
      data: null,
      error: "Error connecting to database",
    };
  }
};

// --- SHOWCASE ---

const getShowcases = async (): Promise<IShowcaseResponseList> => {
  try {
    const response = await axios.get<IShowcase[]>(showcaseEndpoint);
    const validation = validateResponseList(response);

    if (!validation.isValid) {
      return { success: false, data: [], error: validation.error };
    }

    return { success: true, data: response.data };
  } catch (error) {
    console.error("getShowcases: Failed to fetch showcases:", error);
    return { success: false, data: [], error: "Error connecting to database" };
  }
};

const getShowcaseById = async (
  id: number,
): Promise<IShowcaseResponseSingle> => {
  try {
    const response = await axios.get<IShowcase>(`${showcaseEndpoint}/${id}`);
    const validation = validateResponseSingle(response);

    if (!validation.isValid) {
      return { success: false, data: null, error: validation.error };
    }

    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return {
        success: true,
        data: null,
        error: "No showcase found with that ID.",
      };
    }
    console.error("getShowcaseById: Failed to fetch showcase:", error);
    return {
      success: false,
      data: null,
      error: "Error connecting to database",
    };
  }
};

const getShowcaseImages = async (id: number): Promise<string[]> => {
  try {
    const response = await axios.get<string[]>(
      `${showcaseEndpoint}/${id}/images`,
    );
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("getShowcaseImages: Failed to fetch showcase images:", error);
    return [];
  }
};

// --- VALIDATION HELPERS ---

const validateResponseList = (
  response: AxiosResponse,
): { isValid: boolean; error?: string } => {
  if (response.status !== 200) {
    return { isValid: false, error: "Failed to fetch from server." };
  }
  if (!response.data || !Array.isArray(response.data)) {
    return {
      isValid: false,
      error: "Invalid data format received from server.",
    };
  }
  if (response.data.length === 0) {
    return { isValid: true, error: "No data available in the server." };
  }
  return { isValid: true };
};

const validateResponseSingle = (
  response: AxiosResponse,
): { isValid: boolean; error?: string } => {
  if (response.status !== 200) {
    return { isValid: false, error: "Failed to fetch from server." };
  }
  if (!response.data) {
    return { isValid: false, error: "No data available in the server." };
  }
  return { isValid: true };
};

export {
  getTenures,
  getTenureById,
  getSkills,
  getSkillById,
  getShowcases,
  getShowcaseById,
  getShowcaseImages,
};
