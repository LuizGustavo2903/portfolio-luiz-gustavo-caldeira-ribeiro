# 🧠 ProfileLens: Image-Based Leadership Profile Classifier

![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Teachable Machine](https://img.shields.io/badge/Teachable_Machine-4285F4?style=for-the-badge&logo=google&logoColor=white)
![MobileNetV2](https://img.shields.io/badge/MobileNetV2-Transfer_Learning-blueviolet?style=for-the-badge)
![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📝 Descrição do Projeto

O **ProfileLens** é um modelo de classificação de imagens treinado via **Google Teachable Machine**, capaz de identificar e categorizar automaticamente dois perfis comportamentais/profissionais com base em entrada visual:

- 🏆 **Perfil Liderança** — Identifica características visuais associadas a perfis de liderança.
- ⚙️ **Perfil Operacional** — Reconhece padrões visuais ligados a perfis operacionais.

O modelo utiliza **Transfer Learning** sobre a arquitetura **MobileNetV2**, exportado no formato **TensorFlow.js** para execução direta no navegador, sem necessidade de servidor de inferência.

---

## 🚀 Tecnologias Utilizadas

- **Google Teachable Machine** v2.4.14 — Plataforma de treinamento no-code/low-code
- **TensorFlow.js** v1.7.4 — Runtime de inferência em JavaScript
- **MobileNetV2** — Backbone de extração de features (pré-treinado no ImageNet)
- **Keras Sequential API** — Estrutura do modelo com camadas densas customizadas
- **@teachablemachine/image** v0.8.4-alpha2 — Biblioteca oficial de integração

---

## 🏗️ Arquitetura do Modelo

O modelo segue uma pipeline clássica de Transfer Learning com fine-tuning na camada de classificação:

```
Input Image (224 × 224 × 3)
        ↓
  MobileNetV2 Backbone
  (Conv1 → 16 Inverted Residual Blocks → Conv_1)
  Feature Map: [1, 1, 1280]
        ↓
  Dense Layer 1: 1280 → 100  (ReLU)
        ↓
  Dense Layer 2: 100 → 2     (Softmax)
        ↓
  Output: [Perfil Liderança | Perfil Operacional]
```

| Parâmetro              | Valor             |
|------------------------|-------------------|
| Backbone               | MobileNetV2       |
| Input Shape            | 224 × 224 × 3     |
| Feature Extractor Out  | 1.280 unidades    |
| Camada Oculta          | 100 neurônios     |
| Classes de Saída       | 2                 |
| Total de Pesos         | 263 tensores      |
| Tamanho dos Pesos      | ~2,15 MB          |
| Framework de Export    | TensorFlow.js     |
| Keras Version          | tfjs-layers 1.7.4 |

---

## 📊 Estrutura dos Arquivos

```
tm-my-image-model/
├── model.json        # Topologia e manifesto de pesos do modelo
├── weights.bin       # Pesos treinados (binário, ~2.15 MB)
└── metadata.json     # Metadados: versão, labels, imageSize
```

---

## 🔧 Como Integrar

### 1. Via CDN (HTML puro)

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.7.4/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>

<script>
  const MODEL_URL = "./tm-my-image-model/";

  async function loadModel() {
    const modelURL = MODEL_URL + "model.json";
    const metaURL  = MODEL_URL + "metadata.json";
    const model    = await tmImage.load(modelURL, metaURL);
    return model;
  }

  async function predict(imageElement) {
    const model      = await loadModel();
    const prediction = await model.predict(imageElement);
    // prediction = [{ className, probability }, ...]
    console.log(prediction);
  }
</script>
```

### 2. Via npm (Node.js / React / Vue)

```bash
npm install @teachablemachine/image @tensorflow/tfjs
```

```javascript
import * as tmImage from "@teachablemachine/image";

const MODEL_URL = "/tm-my-image-model/";

async function classifyImage(imgElement) {
  const model = await tmImage.load(
    MODEL_URL + "model.json",
    MODEL_URL + "metadata.json"
  );
  const predictions = await model.predict(imgElement);
  const top = predictions.reduce((a, b) =>
    a.probability > b.probability ? a : b
  );
  return top; // { className: "Perfil Liderança", probability: 0.97 }
}
```

---

## 🗂️ Labels de Classificação

| Índice | Label               | Descrição                                      |
|--------|---------------------|------------------------------------------------|
| `0`    | Perfil Liderança    | Padrão visual associado a perfil de liderança  |
| `1`    | Perfil Operacional  | Padrão visual associado a perfil operacional   |

---

## ⚙️ Requisitos

- Navegador moderno com suporte a **WebGL** (recomendado para GPU acceleration)
- **Node.js** ≥ 12 para uso em ambiente server-side
- Os três arquivos (`model.json`, `weights.bin`, `metadata.json`) devem estar no mesmo diretório

---

## 📅 Metadados do Modelo

| Campo              | Valor                          |
|--------------------|--------------------------------|
| Nome do Modelo     | `tm-my-image-model`            |
| Data de Geração    | 2026-05-14T14:19:30.909Z       |
| TM Version         | 2.4.14                         |
| TF.js Version      | 1.7.4                          |
| Package Version    | 0.8.4-alpha2                   |
| Tipo de Tarefa     | Image Classification           |

---

## 📄 Licença

Este modelo foi gerado via [Google Teachable Machine](https://teachablemachine.withgoogle.com).

[Voltar ao início](https://github.com/LuizGustavo2903/portfolio-luiz-gustavo-caldeira-ribeiro)
