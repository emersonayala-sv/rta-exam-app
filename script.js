const objectiveQuestions = [
    { id: 1, type: "true_false", question: "El nivel de servicio y el ASA se comportan de forma directa a la profundidad de la cola de llamadas Inbound.", options: ["Verdadero", "Falso"], correctAnswer: 1 },
    { id: 2, type: "true_false", question: "Durante un pico de demanda por una emergencia sanitaria con mÃºltiples canales bajo presiÃ³n, se debe proteger primero el canal Digital (WhatsApp) antes que el Inbound.", options: ["Verdadero", "Falso"], correctAnswer: 1 },
    { id: 3, type: "true_false", question: "Una mayor ocupaciÃ³n mejora la eficiencia, pero conlleva el riesgo de agotamiento del personal mÃ©dico/administrativo y un ASA mÃ¡s prolongado si es demasiado alta.", options: ["Verdadero", "Falso"], correctAnswer: 0 },
    { id: 4, type: "true_false", question: "La fÃ³rmula de Erlang C se utiliza principalmente para estimar las necesidades de FTE en funciÃ³n del volumen Inbound, AHT y SL objetivo.", options: ["Verdadero", "Falso"], correctAnswer: 0 },
    { id: 5, type: "true_false", question: "Para definir umbrales de alerta Ãºtiles, es recomendable comenzar con la volatilidad histÃ³rica del intervalo y ajustar por canal (Inbound, Outbound, Digital).", options: ["Verdadero", "Falso"], correctAnswer: 0 },
    { id: 6, type: "multiple_choice", question: "Si una campaÃ±a de vacunaciÃ³n o emergencia aumenta el volumen Inbound en un 60% en 10 minutos, Â¿cuÃ¡l de las siguientes acciones es la mÃ¡s adecuada para los primeros 30 minutos?", options: ["Suspender descansos/capacitaciÃ³n, priorizar llamadas Inbound y enviar comunicaciÃ³n de la situaciÃ³n a las clÃ­nicas.", "Normalizar los horarios y publicar un resumen posterior al incidente.", "Limitar la concurrencia de WhatsApp y establecer reuniones de crisis cada 120 minutos.", "Ignorar el aumento hasta que pasen 60 minutos para confirmar la tendencia."], correctAnswer: 0 },
    { id: 7, type: "multiple_choice", question: "Â¿QuÃ© mÃ©tricas son esenciales monitorear en un panel de control intradiario para una operaciÃ³n de salud?", options: ["Tasa de conversiÃ³n de ventas y costo por adquisiciÃ³n.", "SL, ASA, profundidad de la cola, abandono y ocupaciÃ³n por canal (Inbound/Digital).", "Ausentismo mensual y rotaciÃ³n de personal (MÃ©tricas de HR).", "Costo por llamada y margen de beneficio."], correctAnswer: 1 },
    { id: 8, type: "multiple_choice", question: "Â¿QuÃ© herramienta intradiaria es mejor utilizar para gestionar la demanda (reducir volumen entrante) durante un pico de llamadas?", options: ["Mensajes en el IVR y respuestas automÃ¡ticas en WhatsApp derivando al portal de pacientes (autoservicio).", "Intercambios de VTO y horas extras.", "Asignar agentes con habilidades transversales.", "Congelar el tiempo improductivo."], correctAnswer: 0 },
    { id: 9, type: "multiple_choice", question: "Â¿CÃ³mo se debe gestionar un problema de adherencia recurrente en un agente o coordinador de citas sin perjudicar su moral?", options: ["Despedir al agente de inmediato.", "Ignorarlo si el agente tiene buen AHT.", "Colaborar con supervisores en un plan de capacitaciÃ³n que considere el contexto (retrasos en el sistema mÃ©dico, formaciÃ³n).", "Hacer una advertencia pÃºblica en el chat grupal."], correctAnswer: 2 },
    { id: 10, type: "multiple_choice", question: "Cuando la direcciÃ³n mÃ©dica exige baja tasa de abandono en Inbound (urgencias), pero administraciÃ³n presiona por mayor disponibilidad en Digital (WhatsApp) para agendar citas, Â¿cÃ³mo manejas estas prioridades contrapuestas?", options: ["Priorizar siempre agendamiento porque genera ingresos a las clÃ­nicas.", "Priorizar siempre Inbound sin notificar a las otras Ã¡reas.", "Cuantificar el impacto en la atenciÃ³n, proponer priorizaciÃ³n Inbound con medidas de protecciÃ³n y desbordes para WhatsApp.", "Dejar que los agentes decidan quÃ© canal atender."], correctAnswer: 2 },
    { id: 11, type: "yes_no", question: "Â¿Es una buena prÃ¡ctica experimentar con opciones de devoluciÃ³n de llamada (callback) en Inbound durante picos de demanda si el proceso clÃ­nico lo permite?", options: ["SÃ­", "No"], correctAnswer: 0 },
    { id: 12, type: "yes_no", question: "Â¿Se debe priorizar la velocidad (SL/ASA) a expensas de la calidad de atenciÃ³n al paciente (CSAT) de forma indefinida durante perÃ­odos de alto trÃ¡fico?", options: ["SÃ­", "No"], correctAnswer: 1 },
    { id: 13, type: "yes_no", question: "Â¿Es correcto tomar decisiones intradiarias basÃ¡ndose Ãºnicamente en la intuiciÃ³n cuando los datos de los paneles son confusos o poco fiables?", options: ["SÃ­", "No"], correctAnswer: 1 },
    { id: 14, type: "yes_no", question: "Â¿Se deberÃ­a incluir una matriz RACI y Ã¡rboles de decisiÃ³n en un manual de estrategias en tiempo real para contingencias sanitarias?", options: ["SÃ­", "No"], correctAnswer: 0 },
    { id: 15, type: "yes_no", question: "Â¿Mover temporalmente agentes de Outbound (campaÃ±as preventivas) a Inbound (atenciÃ³n inmediata) es una tÃ¡ctica vÃ¡lida durante un pico imprevisto de volumen?", options: ["SÃ­", "No"], correctAnswer: 0 },
    { id: 16, type: "multiple_choice", question: "Al revisar el panel de KPIs de atenciÃ³n, notas que en la franja de 08:00 a 10:00 AM el nÃºmero de llamadas abandonadas se dispara (mÃ¡s de 20 por intervalo), mientras que en la madrugada es casi nulo. Â¿QuÃ© acciÃ³n preventiva debes tomar para los siguientes dÃ­as?", options: ["Esperar al final del dÃ­a para reportarlo al cliente.", "Alinear los horarios y restringir descansos/pausas en la franja de 08:00 a 10:00 para maximizar la concurrencia en el pico.", "Reducir la cantidad de agentes en Inbound en la maÃ±ana.", "Apagar el IVR para que no entren llamadas."], correctAnswer: 1 },
    { id: 17, type: "multiple_choice", question: "Observas en el grÃ¡fico de distribuciÃ³n del grupo que de 90 asesores, casi el 49% (44 asesores) se encuentran en 'Pausa administrativa', dejando solo 27 disponibles. Â¿CuÃ¡l es el riesgo principal y tu acciÃ³n inmediata?", options: ["No hay riesgo si hay pocos contactos entrando.", "Riesgo inminente de caÃ­da de Service Level por falta de adherencia; se debe coordinar de inmediato con los supervisores en piso para retornar agentes a estado 'Disponible'.", "Felicitar al equipo por realizar labores administrativas.", "Activar inmediatamente devoluciones de llamada (callback)."], correctAnswer: 1 },
    { id: 18, type: "multiple_choice", question: "En el panel de supervisiÃ³n detallado, detectas a varios agentes con estados de 'Pausa administrativa' que superan las 2 e incluso 5 horas continuas sin estar en llamada. Â¿QuÃ© indica esto operativamente?", options: ["Es una prÃ¡ctica normal y saludable de backoffice.", "Que el volumen Inbound es demasiado bajo y el sistema los pausa.", "Falla general de la plataforma telefÃ³nica en toda la red.", "Fuga de capacidad severa o uso incorrecto de auxiliares; requiere intervenciÃ³n inmediata del supervisor para validar quÃ© hacen esos agentes."], correctAnswer: 3 }
];

const openQuestions = [
    { id: "open_1", type: "open", question: "[Escenario Abierto] Un apagÃ³n masivo afecta a 3 de las 5 clÃ­nicas principales que atiende el Call Center. El volumen de llamadas Inbound se triplica repentinamente y WhatsApp se satura de pacientes preocupados por sus citas. Describe paso a paso tu plan de acciÃ³n en los primeros 30 y 60 minutos como Analista RTA." },
    { id: "open_2", type: "open", question: "[Escenario Abierto] Analizando los KPIs, notas que durante la Ãºltima semana el AHT (Tiempo Promedio de AtenciÃ³n) en el grupo de Inbound ha subido un 20%, lo que estÃ¡ afectando severamente la OcupaciÃ³n y el ASA. Â¿CÃ³mo investigarÃ­as la causa raÃ­z en tiempo real y quÃ© medidas propondrÃ­as?" }
];

// App State
let currentQuestions = [];
let userAnswers = {};
let participantName = "";
let timerInterval;
let timeRemaining = 15 * 60; // 15 minutos
let currentRecordDetails = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const examScreen = document.getElementById('exam-screen');
const resultsScreen = document.getElementById('results-screen');
const repositoryScreen = document.getElementById('repository-screen');

const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const viewRepoBtn = document.getElementById('view-repo-btn');
const backHomeBtn = document.getElementById('back-home-btn');
const downloadCsvBtn = document.getElementById('download-csv-btn');
const clearRepoBtn = document.getElementById('clear-repo-btn');
const nameInput = document.getElementById('participant-name');
const questionsContainer = document.getElementById('questions-container');
const repoBody = document.getElementById('repo-body');

// Modals
const adminModal = document.getElementById('admin-modal');
const confirmModal = document.getElementById('confirm-modal');
const clearModal = document.getElementById('clear-modal');
const alertModal = document.getElementById('alert-modal');
const detailsModal = document.getElementById('details-modal');

// Event Listeners
startBtn.addEventListener('click', startExam);
submitBtn.addEventListener('click', finishExamCheck);
restartBtn.addEventListener('click', () => switchScreen(resultsScreen, startScreen));
viewRepoBtn.addEventListener('click', showAdminModal);
backHomeBtn.addEventListener('click', () => switchScreen(repositoryScreen, startScreen));
downloadCsvBtn.addEventListener('click', downloadCSV);
clearRepoBtn.addEventListener('click', clearRepository);

// Modal listeners
document.getElementById('admin-cancel-btn').addEventListener('click', () => adminModal.classList.remove('active'));
document.getElementById('admin-login-btn').addEventListener('click', verifyAdmin);
// Confirm Submit (incomplete exam)
document.getElementById('confirm-cancel-btn').addEventListener('click', () => confirmModal.classList.remove('active'));
document.getElementById('confirm-submit-btn').addEventListener('click', () => {
    confirmModal.classList.remove('active');
    processSubmit();
});
// Confirm Clear repo
document.getElementById('clear-cancel-btn').addEventListener('click', () => clearModal.classList.remove('active'));
document.getElementById('clear-confirm-btn').addEventListener('click', () => {
    localStorage.removeItem('rta_exam_results');
    loadRepositoryData();
    clearModal.classList.remove('active');
processSubmit
document.getElementById('alert-ok-btn').addEventListener('click', () => {
    alertModal.classList.remove('active');
    processSubmit();
});
document.getElementById('detail-close-btn').addEventListener('click', () => detailsModal.classList.remove('active'));
document.getElementById('copy-details-btn').addEventListener('click', copyDetailsToClipboard);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startExam() {
    participantName = nameInput.value.trim();
    if (participantName === "") {
        document.getElementById('name-error').style.display = 'block';
        return;
    }
    document.getElementById('name-error').style.display = 'none';
    
    document.getElementById('display-name').textContent = participantName;
    document.getElementById('result-name').textContent = participantName;
    
    // Select 10 random objective questions
    const shuffledObj = shuffleArray([...objectiveQuestions]);
    const selectedObj = shuffledObj.slice(0, 10);
    
    // Append the 2 open questions
    currentQuestions = [...selectedObj, ...openQuestions];
    userAnswers = {};
    
    // Timer reset
    clearInterval(timerInterval);
    timeRemaining = 15 * 60;
    updateTimerDisplay();
    timerInterval = setInterval(countdownTimer, 1000);
    
    renderQuestions();
    switchScreen(startScreen, examScreen);
}

function countdownTimer() {
    timeRemaining--;
    updateTimerDisplay();
    
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        showAlert("Â¡El tiempo de 15 minutos se ha agotado! El examen se enviarÃ¡ automÃ¡ticamente con las respuestas guardadas hasta ahora.");
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timerDisplay = document.getElementById('timer-display');
    
    if(timerDisplay) {
        timerDisplay.textContent = `â±ï¸ ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeRemaining <= 180) { // 3 minutes warning
            timerDisplay.style.color = 'white';
            timerDisplay.style.background = 'var(--danger)';
            timerDisplay.style.borderColor = 'var(--danger)';
        } else {
            timerDisplay.style.color = 'var(--text-dark)';
            timerDisplay.style.background = '#fef3c7';
            timerDisplay.style.borderColor = '#fde68a';
        }
    }
}

function renderQuestions() {
    questionsContainer.innerHTML = '';
    
    currentQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card question-card';
        
        const qNumber = index + 1;
        const totalQ = currentQuestions.length;
        
        let answerAreaHtml = '';
        
        if (q.type === 'open') {
            answerAreaHtml = `
                <textarea id="q${q.id}_open" class="open-textarea" rows="4" placeholder="Escribe tu respuesta detallada aquÃ­..." style="width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: inherit; resize: vertical;"></textarea>
            `;
        } else {
            let optionsHtml = '';
            q.options.forEach((opt, optIndex) => {
                optionsHtml += `
                    <label class="option-label" for="q${q.id}_opt${optIndex}">
                        <input type="radio" class="option-input" name="q${q.id}" id="q${q.id}_opt${optIndex}" value="${optIndex}">
                        <span class="option-text">${opt}</span>
                    </label>
                `;
            });
            answerAreaHtml = `<div class="options-container">${optionsHtml}</div>`;
        }
        
        card.innerHTML = `
            <div style="font-size: 0.85rem; color: var(--primary); margin-bottom: 0.5rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Pregunta ${qNumber} de ${totalQ} ${q.type === 'open' ? '(Desarrollo)' : '(OpciÃ³n MÃºltiple)'}</div>
            <div class="question-text">${q.question}</div>
            ${answerAreaHtml}
        `;
        
        questionsContainer.appendChild(card);
        
        // Listeners for answers
        if (q.type === 'open') {
            const textarea = card.querySelector('textarea');
            textarea.addEventListener('input', (e) => {
                userAnswers[q.id] = e.target.value;
                updateProgress();
            });
        } else {
            const inputs = card.querySelectorAll('input[type="radio"]');
            inputs.forEach(input => {
                input.addEventListener('change', (e) => {
                    userAnswers[q.id] = parseInt(e.target.value);
                    updateProgress();
                });
            });
        }
    });
    
    updateProgress();
}

function updateProgress() {
    const answered = Object.keys(userAnswers).filter(k => userAnswers[k] !== '' && userAnswers[k] !== undefined).length;
    document.getElementById('progress-text').textContent = `${answered}/${currentQuestions.length}`;
}

function finishExamCheck() {
    const answered = Object.keys(userAnswers).filter(k => userAnswers[k] !== '' && userAnswers[k] !== undefined).length;
    if (answered < currentQuestions.length) {
        document.getElementById('confirm-message').textContent = `Solo has respondido ${answered} de ${currentQuestions.length} preguntas. Â¿Seguro que quieres enviar? Las preguntas sin responder contarÃ¡n como incorrectas.`;
        confirmModal.classList.add('active');
        return;
    }
    processSubmit();
}

function processSubmit() {
    clearInterval(timerInterval);
    calculateResults();
    switchScreen(examScreen, resultsScreen);
}

function calculateResults() {
    let correctCount = 0;
    let objCount = 0;
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    
    const detailsRecord = [];

    currentQuestions.forEach((q, index) => {
        const userAnswer = userAnswers[q.id];
        const isObj = q.type !== 'open';
        let isCorrect = false;
        let answerText = "";
        let correctAnswerText = "";

        if (isObj) {
            objCount++;
            isCorrect = userAnswer === q.correctAnswer;
            if (isCorrect) correctCount++;
            
            answerText = userAnswer !== undefined ? q.options[userAnswer] : "No respondida";
            correctAnswerText = q.options[q.correctAnswer];
        } else {
            answerText = userAnswer || "No respondida";
            correctAnswerText = "RevisiÃ³n manual requerida (Ver guÃ­a de evaluaciÃ³n)";
            isCorrect = null; // null represents pending/manual
        }
        
        // Save detail for CSV
        detailsRecord.push({
            question: q.question,
            answer: answerText,
            correctAnswer: correctAnswerText,
            isCorrect: isCorrect,
            type: q.type
        });
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect === true ? 'correct' : (isCorrect === false ? 'incorrect' : '')}`;
        if(isCorrect === null) reviewItem.style.borderLeftColor = 'var(--primary)';

        reviewItem.innerHTML = `
            <div class="review-q">${index + 1}. ${q.question}</div>
            <div class="review-a">
                Tu respuesta: <strong>${answerText}</strong> ${isCorrect === true ? 'âœ…' : (isCorrect === false ? 'âŒ' : 'ðŸ“ (Pendiente)')}<br>
                ${isCorrect === false ? `Respuesta esperada: <strong>${correctAnswerText}</strong>` : ''}
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
    
    // Update Score UI
    const percentage = (correctCount / objCount) * 100;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('score-text').textContent = `${percentage}%`;
    
    const circle = document.getElementById('score-path');
    setTimeout(() => {
        circle.setAttribute('stroke-dasharray', `${percentage}, 100`);
    }, 100);

    // SVG elements require setAttribute for class, not className
    let statusClass = 'poor';
    let statusText = 'No Aprobado';
    let message = "Requiere mÃ¡s entrenamiento en mÃ©tricas de Salud WFM.";
    
    if (percentage >= 80) {
        circle.setAttribute('class', 'circle excellent');
        statusClass = 'excellent';
        statusText = 'Aprobado (Test)';
        message = "Â¡Excelente en teorÃ­a! Respuestas abiertas pendientes de revisiÃ³n.";
    } else if (percentage >= 60) {
        circle.setAttribute('class', 'circle good');
        statusClass = 'good';
        statusText = 'En RevisiÃ³n';
        message = "Buen conocimiento base. Analizar respuestas abiertas para decisiÃ³n final.";
    } else {
        circle.setAttribute('class', 'circle poor');
    }
    
    document.getElementById('score-message').textContent = message;

    // Save to LocalStorage
    saveToRepository(participantName, percentage, statusText, statusClass, detailsRecord);
}

// --- ADMIN & REPOSITORY LOGIC ---

function showAdminModal() {
    document.getElementById('admin-pwd-input').value = '';
    document.getElementById('admin-error').style.display = 'none';
    adminModal.classList.add('active');
}

function verifyAdmin() {
    const pwd = document.getElementById('admin-pwd-input').value;
    if (pwd === "admin") {
        adminModal.classList.remove('active');
        loadRepositoryData();
        switchScreen(startScreen, repositoryScreen);
    } else {
        document.getElementById('admin-error').style.display = 'block';
    }
}

function loadRepositoryData() {
    const history = JSON.parse(localStorage.getItem('rta_exam_results')) || [];
    repoBody.innerHTML = '';
    
    if (history.length === 0) {
        repoBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No hay evaluaciones guardadas aÃºn.</td></tr>`;
        return;
    }
    
    // Sort descending by id (timestamp)
    history.sort((a, b) => b.id - a.id).forEach(record => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${record.date}</td>
            <td style="font-weight: 500; color: var(--text-dark);">${record.name}</td>
            <td><strong>${record.score}%</strong> (Obj.)</td>
            <td><span class="status-badge ${record.statusClass}">${record.status}</span></td>
            <td><button class="btn secondary-btn view-details-btn" data-id="${record.id}" style="padding: 0.3rem 0.6rem; font-size: 0.8rem;">Ver Respuestas</button></td>
        `;
        repoBody.appendChild(tr);
    });

    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            showDetailsModal(id);
        });
    });
}

function showDetailsModal(id) {
    const history = JSON.parse(localStorage.getItem('rta_exam_results')) || [];
    const record = history.find(r => r.id == id);
    if(!record) return;

    currentRecordDetails = record.details;
    document.getElementById('detail-candidate-name').textContent = record.name;
    const container = document.getElementById('detail-content');
    container.innerHTML = '';

    record.details.forEach((det, i) => {
        let isCorrectHtml = det.isCorrect === true ? '<span style="color:var(--success);">âœ… Correcto</span>' : 
                            (det.isCorrect === false ? '<span style="color:var(--danger);">âŒ Incorrecto</span>' : '<span style="color:var(--primary);">ðŸ“ Pendiente de revisiÃ³n manual</span>');

        container.innerHTML += `
            <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
                <p style="font-weight: 600; margin-bottom: 0.2rem; font-size: 0.9rem;">${i+1}. ${det.question}</p>
                <p style="margin-bottom: 0.2rem; font-size: 0.9rem; color: var(--text-muted);">Respuesta del candidato: <strong style="color: var(--text-dark);">${det.answer}</strong></p>
                <p style="margin-bottom: 0.2rem; font-size: 0.85rem;">Estado: ${isCorrectHtml}</p>
            </div>
        `;
    });

    detailsModal.classList.add('active');
}

function copyDetailsToClipboard() {
    let text = document.getElementById('detail-candidate-name').textContent + " - Resultados\n\n";
    currentRecordDetails.forEach((det, i) => {
        text += `${i+1}. ${det.question}\nRespuesta: ${det.answer}\nEstado: ${det.isCorrect === null ? 'RevisiÃ³n Manual' : (det.isCorrect ? 'Correcto' : 'Incorrecto')}\n\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
        alert("Â¡Respuestas copiadas al portapapeles!");
    }).catch(err => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Â¡Respuestas copiadas al portapapeles!");
    });
}

function escapeCsv(str) {
    if (str === null || str === undefined) return '""';
    const text = String(str).replace(/"/g, '""');
    return `"${text}"`;
}

function downloadCSV() {
    const history = JSON.parse(localStorage.getItem('rta_exam_results')) || [];
    if (history.length === 0) {
        showAlert("No hay datos para descargar.");
        return;
    }
    
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; 
    csvContent += "Fecha,Candidato,Puntaje_Objetivo(%),Estado_Prueba";
    
    for(let i=1; i<=12; i++){
        csvContent += `,Pregunta_${i},Respuesta_Candidato_${i},Es_Correcta_${i}`;
    }
    csvContent += "\n";
    
    history.forEach(record => {
        let row = [
            escapeCsv(record.date),
            escapeCsv(record.name),
            record.score,
            escapeCsv(record.status)
        ];
        
        record.details.forEach(det => {
            row.push(escapeCsv(det.question));
            row.push(escapeCsv(det.answer));
            let val = det.isCorrect === null ? 'RevisiÃ³n Manual' : (det.isCorrect ? 'SI' : 'NO');
            row.push(escapeCsv(val));
        });
        
        while(row.length < 4 + (12 * 3)) {
            row.push('""', '""', '""');
        }
        
        csvContent += row.join(",") + "\n";
    });
    
    try {
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "resultados_detallados_rta.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch(e) {
        showAlert("La descarga directa fue bloqueada por el navegador. Utiliza el botÃ³n 'Ver Respuestas' y luego 'Copiar al Portapapeles' para extraer los datos de cada candidato.");
    }
}

function clearRepository() {
    clearModal.classList.add('active');
}

// --- UTILS ---
function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    setTimeout(() => {
        window.scrollTo(0, 0);
        showScreen.classList.add('active');
        
        if(showScreen === startScreen) {
            nameInput.value = '';
            document.getElementById('score-path').setAttribute('stroke-dasharray', '0, 100');
            document.getElementById('name-error').style.display = 'none';
        }
    }, 400); 
}

function showAlert(msg) {
    document.getElementById('alert-message').textContent = msg;
    alertModal.classList.add('active');
}
