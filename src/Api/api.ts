import axios, { AxiosResponse } from "axios";
import { components } from "./models";

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://pizzariag2api.herokuapp.com/api"
    : "http://localhost:1337/api"; // URL base da API em ambiente local

// Função utilitária para realizar chamadas à API
async function apiRequest<T>(
  path: string,
  method: string,
  data?: any
): Promise<AxiosResponse<T>> {
  try {
    const response = await axios.request<T>({
      url: `${API_BASE_URL}${path}`,
      method,
      data,
    });
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error");
  }
}

// Função para buscar todas as bebidas
export async function getBebidas(): Promise<components["schemas"]["Bebida"][]> {
  const response = await apiRequest<components["schemas"]["Bebida"][]>(
    "/bebidas",
    "GET"
  );
  return response.data;
}

// Função para criar uma nova bebida
export async function criarBebida(
  data: components["schemas"]["Bebida"]
): Promise<components["schemas"]["Bebida"]> {
  const response = await apiRequest<components["schemas"]["Bebida"]>(
    "/bebidas",
    "POST",
    data
  );
  return response.data;
}

// Função para buscar uma bebida por ID
export async function getBebidaById(
  id: string
): Promise<components["schemas"]["Bebida"]> {
  const response = await apiRequest<components["schemas"]["Bebida"]>(
    `/bebidas/${id}`,
    "GET"
  );
  return response.data;
}

// Função para atualizar uma bebida por ID
export async function atualizarBebidaById(
  id: string,
  data: components["schemas"]["Bebida"]
): Promise<components["schemas"]["Bebida"]> {
  const response = await apiRequest<components["schemas"]["Bebida"]>(
    `/bebidas/${id}`,
    "PUT",
    data
  );
  return response.data;
}

// Função para deletar uma bebida por ID
export async function deletarBebidaById(id: string): Promise<void> {
  await apiRequest<void>(`/bebidas/${id}`, "DELETE");
}

// Função para buscar todos os cardápios
export async function getCardapios(): Promise<
  components["schemas"]["Cardapio"][]
> {
  const response = await apiRequest<components["schemas"]["Cardapio"][]>(
    "/cardapios",
    "GET"
  );
  return response.data;
}

// Função para criar um novo cardápio
export async function criarCardapio(
  data: components["schemas"]["Cardapio"]
): Promise<components["schemas"]["Cardapio"]> {
  const response = await apiRequest<components["schemas"]["Cardapio"]>(
    "/cardapios",
    "POST",
    data
  );
  return response.data;
}

// Função para buscar um cardápio por ID
export async function getCardapioById(
  id: string
): Promise<components["schemas"]["Cardapio"]> {
  const response = await apiRequest<components["schemas"]["Cardapio"]>(
    `/cardapios/${id}`,
    "GET"
  );
  return response.data;
}

// Função para atualizar um cardápio por ID
export async function atualizarCardapioById(
  id: string,
  data: components["schemas"]["Cardapio"]
): Promise<components["schemas"]["Cardapio"]> {
  const response = await apiRequest<components["schemas"]["Cardapio"]>(
    `/cardapios/${id}`,
    "PUT",
    data
  );
  return response.data;
}

// Função para deletar um cardápio por ID
export async function deletarCardapioById(id: string): Promise<void> {
  await apiRequest<void>(`/cardapios/${id}`, "DELETE");
}

// Função para fazer upload de arquivos
export async function uploadFiles(
  data: FormData
): Promise<components["schemas"]["UploadFile"][]> {
  const response = await apiRequest<components["schemas"]["UploadFile"][]>(
    "/upload",
    "POST",
    data
  );
  return response.data;
}

// Função para buscar todos os arquivos
export async function getAllFiles(): Promise<
  components["schemas"]["UploadFile"][]
> {
  const response = await apiRequest<components["schemas"]["UploadFile"][]>(
    "/upload/files",
    "GET"
  );
  return response.data;
}

// Função para buscar um arquivo por ID
export async function getFileById(
  id: string
): Promise<components["schemas"]["UploadFile"]> {
  const response = await apiRequest<components["schemas"]["UploadFile"]>(
    `/upload/files/${id}`,
    "GET"
  );
  return response.data;
}

// Função para deletar um arquivo por ID
export async function deleteFileById(
  id: string
): Promise<components["schemas"]["UploadFile"]> {
  const response = await apiRequest<components["schemas"]["UploadFile"]>(
    `/upload/files/${id}`,
    "DELETE"
  );
  return response.data;
}

// Função para buscar todos os combos
export async function getCombos(): Promise<components["schemas"]["Combo"][]> {
  const response = await apiRequest<components["schemas"]["Combo"][]>(
    "/combos",
    "GET"
  );
  return response.data;
}

// Função para criar um novo combo
export async function criarCombo(
  data: components["schemas"]["Combo"]
): Promise<components["schemas"]["Combo"]> {
  const response = await apiRequest<components["schemas"]["Combo"]>(
    "/combos",
    "POST",
    data
  );
  return response.data;
}

// Função para buscar um combo por ID
export async function getComboById(
  id: string
): Promise<components["schemas"]["Combo"]> {
  const response = await apiRequest<components["schemas"]["Combo"]>(
    `/combos/${id}`,
    "GET"
  );
  return response.data;
}

// Função para atualizar um combo por ID
export async function atualizarComboById(
  id: string,
  data: components["schemas"]["Combo"]
): Promise<components["schemas"]["Combo"]> {
  const response = await apiRequest<components["schemas"]["Combo"]>(
    `/combos/${id}`,
    "PUT",
    data
  );
  return response.data;
}

// Função para deletar um combo por ID
export async function deletarComboById(id: string): Promise<void> {
  await apiRequest<void>(`/combos/${id}`, "DELETE");
}

// Função para buscar todos os pedidos
export async function getPedidos(): Promise<components["schemas"]["Pedido"][]> {
  const response = await apiRequest<components["schemas"]["Pedido"][]>(
    "/pedidos",
    "GET"
  );
  return response.data;
}

// Função para criar um novo pedido
export async function criarPedido(
  data: components["schemas"]["Pedido"]
): Promise<components["schemas"]["Pedido"]> {
  const response = await apiRequest<components["schemas"]["Pedido"]>(
    "/pedidos",
    "POST",
    data
  );
  return response.data;
}

// Função para buscar um pedido por ID
export async function getPedidoById(
  id: string
): Promise<components["schemas"]["Pedido"]> {
  const response = await apiRequest<components["schemas"]["Pedido"]>(
    `/pedidos/${id}`,
    "GET"
  );
  return response.data;
}

// Função para atualizar um pedido por ID
export async function atualizarPedidoById(
  id: string,
  data: components["schemas"]["Pedido"]
): Promise<components["schemas"]["Pedido"]> {
  const response = await apiRequest<components["schemas"]["Pedido"]>(
    `/pedidos/${id}`,
    "PUT",
    data
  );
  return response.data;
}

// Função para deletar um pedido por ID
export async function deletarPedidoById(id: string): Promise<void> {
  await apiRequest<void>(`/pedidos/${id}`, "DELETE");
}

// Função para buscar todos os sabores
export async function getSabores(): Promise<components["schemas"]["Sabor"][]> {
  const response = await apiRequest<components["schemas"]["Sabor"][]>(
    "/sabors",
    "GET"
  );
  return response.data;
}

// Função para criar um novo sabor
export async function criarSabor(
  data: components["schemas"]["Sabor"]
): Promise<components["schemas"]["Sabor"]> {
  const response = await apiRequest<components["schemas"]["Sabor"]>(
    "/sabors",
    "POST",
    data
  );
  return response.data;
}

// Função para buscar um sabor por ID
export async function getSaborById(
  id: string
): Promise<components["schemas"]["Sabor"]> {
  const response = await apiRequest<components["schemas"]["Sabor"]>(
    `/sabors/${id}`,
    "GET"
  );
  return response.data;
}

// Função para atualizar um sabor por ID
export async function atualizarSaborById(
  id: string,
  data: components["schemas"]["Sabor"]
): Promise<components["schemas"]["Sabor"]> {
  const response = await apiRequest<components["schemas"]["Sabor"]>(
    `/sabors/${id}`,
    "PUT",
    data
  );
  return response.data;
}

// Função para deletar um sabor por ID
export async function deletarSaborById(id: string): Promise<void> {
  await apiRequest<void>(`/sabors/${id}`, "DELETE");
}

/* ==================== AUTH ==================== */

// Função para fazer login local
export async function localLogin(data: {
  identifier: string;
  password: string;
}): Promise<components["schemas"]["Users-Permissions-UserRegistration"]> {
  const response = await apiRequest<
    components["schemas"]["Users-Permissions-UserRegistration"]
  >("/auth/local", "POST", data);
  return response.data;
}

// Função para registrar um usuário localmente
export async function localRegister(data: {
  username: string;
  email: string;
  password: string;
}): Promise<components["schemas"]["Users-Permissions-UserRegistration"]> {
  const response = await apiRequest<
    components["schemas"]["Users-Permissions-UserRegistration"]
  >("/auth/local/register", "POST", data);
  return response.data;
}
