const objectiveQuestions = [
    { id: 1, type: "true_false", question: "El nivel de servicio y el ASA se comportan de forma directa a la profundidad de la cola de llamadas Inbound.", options: ["Verdadero", "Falso"], correctAnswer: 1 },
    { id: 2, type: "true_false", question: "Durante un pico de demanda por una emergencia sanitaria con multiples canales bajo presion, se debe proteger primero el canal Digital (WhatsApp) antes que el Inbound.", options: ["Verdadero", "Falso"], correctAnswer: 1 },
    { id: 3, type: "true_false", question: "Una mayor ocupacion mejora la eficiencia, pero conlleva el riesgo de agotamiento del personal medico/administrativo y un ASA mas prolongado si es demasiado alta.", options: ["Verdadero", "Falso"], correctAnswer: 0 },
    { id: 4, type: "true_false", question: "La formula de Erlang C se utiliza principalmente para estimar las necesidades de FTE en funcion del volumen Inbound, AHT y SL objetivo.", options: ["Verdadero", "Falso"], correctAnswer: 0 },
    { id: 5, type: "true_false", question: "Para definir umbrales de alerta utiles, es recomendable comenzar con la volatilidad historica del intervalo y ajustar por canal (Inbound, Outbound, Digital).", options: ["Verdadero", "Falso"], correctAnswer: 0 },
    { id: 6, type: "multiple_choice", question: "Si una campana de vacunacion o emergencia aumenta el volumen Inbound en un 60% en 10 minutos, cual de las siguientes acciones es la mas adecuada para los primeros 30 minutos?", options: ["Suspender descansos/capacitacion, priorizar llamadas Inbound y enviar comunicacion de la situacion a las clinicas.", "Normalizar los horarios y publicar un resumen posterior al incidente.", "Limitar la concurrencia de WhatsApp y establecer reuniones de crisis cada 120 minutos.", "Ignorar el aumento hasta que pasen 60 minutos para confirmar la tendencia."], correctAnswer: 0 },
    { id: 7, type: "multiple_choice", question: "Que metricas son esenciales monitorear en un panel de control intradiario para una operacion de salud?", options: ["Tasa de conversion de ventas y costo por adquisicion.", "SL, ASA, profundidad de la cola, abandono y ocupacion por canal (Inbound/Digital).", "Ausentismo mensual y rotacion de personal (Metricas de HR).", "Costo por llamada y margen de beneficio."], correctAnswer: 1 },
    { id: 8, type: "multiple_choice", question: "Que herramienta intradiaria es mejor utilizar para gestionar la demanda (reducir volumen entrante) durante un pico de llamadas?", options: ["Mensajes en el IVR y respuestas automaticas en WhatsApp derivando al portal de pacientes (autoservicio).", "Intercambios de VTO y horas extras.", "Asignar agentes con habilidades transversales.", "Congelar el tiempo improductivo."], correctAnswer: 0 },
    { id: 9, type: "multiple_choice", question: "Como se debe gestionar un problema de adherencia recurrente en un agente o coordinador de citas sin perjudicar su moral?", options: ["Despedir al agente de inmediato.", "Ignorarlo si el agente tiene buen AHT.", "Colaborar con supervisores en un plan de capacitacion que considere el contexto (retrasos en el sistema medico, formacion).", "Hacer una advertencia publica en el chat grupal."], correctAnswer: 2 },
    { id: 10, type: "multiple_choice", question: "Cuando la direccion medica exige baja tasa de abandono en Inbound (urgencias), pero administracion presiona por mayor disponibilidad en Digital (WhatsApp) para agendar citas, como manejas estas prioridades contrapuestas?", options: ["Priorizar siempre agendamiento porque genera ingresos a las clinicas.", "Priorizar siempre Inbound sin notificar a las otras areas.", "Cuantificar el impacto en la atencion, proponer priorizacion Inbound con medidas de proteccion y desbordes para WhatsApp.", "Dejar que los agentes decidan que canal atender."], correctAnswer: 2 },
    { id: 11, type: "yes_no", question: "Es una buena practica experimentar con opciones de devolucion de llamada (callback) en Inbound durante picos de demanda si el proceso clinico lo permite?", options: ["Si", "No"], correctAnswer: 0 },
    { id: 12, type: "yes_no", question: "Se debe priorizar la velocidad (SL/ASA) a expensas de la calidad de atencion al paciente (CSAT) de forma indefinida durante periodos de alto trafico?", options: ["Si", "No"], correctAnswer: 1 },
    { id: 13, type: "yes_no", question: "Es correcto tomar decisiones intradiarias basandose unicamente en la intuicion cuando los datos de los paneles son confusos o poco fiables?", options: ["Si", "No"], correctAnswer: 1 },
    { id: 14, type: "yes_no", question: "Se deberia incluir una matriz RACI y arboles de decision en un manual de estrategias en tiempo real para contingencias sanitarias?", options: ["Si", "No"], correctAnswer: 0 },
    { id: 15, type: "yes_no", question: "Mover temporalmente agentes de Outbound (campanas preventivas) a Inbound (atencion inmediata) es una tactica valida durante un pico imprevisto de volumen?", options: ["Si", "No"], correctAnswer: 0 },
    { id: 16, type: "multiple_choice", question: "Al revisar el panel de KPIs de atencion, notas que en la franja de 08:00 a 10:00 AM el numero de llamadas abandonadas se dispara (mas de 20 por intervalo), mientras que en la madrugada es casi nulo. Que accion preventiva debes tomar para los siguientes dias?", options: ["Esperar al final del dia para reportarlo al cliente.", "Alinear los horarios y restringir descansos/pausas en la franja de 08:00 a 10:00 para maximizar la concurrencia en el pico.", "Reducir la cantidad de agentes en Inbound en la manana.", "Apagar el IVR para que no entren llamadas."], correctAnswer: 1 },
    { id: 17, type: "multiple_choice", question: "Observas en el grafico de distribucion del grupo que de 90 asesores, casi el 49% (44 asesores) se encuentran en Pausa administrativa, dejando solo 27 disponibles. Cual es el riesgo principal y tu accion inmediata?", options: ["No hay riesgo si hay pocos contactos entrando.", "Riesgo inminente de caida de Service Level por falta de adherencia; se debe coordinar de inmediato con los supervisores en piso para retornar agentes a estado Disponible.", "Felicitar al equipo por realizar labores administrativas.", "Activar inmediatamente devoluciones de llamada (callback)."], correctAnswer: 1 },
    { id: 18, type: "multiple_choice", question: "En el panel de supervision detallado, detectas a varios agentes con estados de Pausa administrativa que superan las 2 e incluso 5 horas continuas sin estar en llamada. Que indica esto operativamente?", options: ["Es una practica normal y saludable de backoffice.", "Que el volumen Inbound es demasiado bajo y el sistema los pausa.", "Falla general de la plataforma telefonica en toda la red.", "Fuga de capacidad severa o uso incorrecto de auxiliares; requiere intervencion inmediata del supervisor para validar que hacen esos agentes."], correctAnswer: 3 }
];

const openQuestions = [
    { id: "open_1", type: "open", question: "[Escenario Abierto 1] Un apagon masivo afecta a 3 de las 5 clinicas principales que atiende el Call Center. El volumen de llamadas Inbound se triplica repentinamente y WhatsApp se satura de pacientes preocupados por sus citas. Describe paso a paso tu plan de accion en los primeros 30 y 60 minutos como Analista RTA." },
    { id: "open_2", type: "open", question: "[Escenario Abierto 2] Analizando los KPIs, notas que durante la ultima semana el AHT (Tiempo Promedio de Atencion) en el grupo de Inbound ha subido un 20%, lo que esta afectando severamente la Ocupacion y el ASA. Como investigarias la causa raiz en tiempo real y que medidas propondrias?" }
];

// App State
let currentQuestions = [];
let userAnswers = {};
let participantName = "";
let timerInterval;
let timeRemaining = 30 * 60;
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
restartBtn.addEventListener('click', function() { switchScreen(resultsScreen, startScreen); });
viewRepoBtn.addEventListener('click', showAdminModal);
backHomeBtn.addEventListener('click', function() { switchScreen(repositoryScreen, startScreen); });
downloadCsvBtn.addEventListener('click', downloadCSV);
clearRepoBtn.addEventListener('click', clearRepository);

// Modal listeners
document.getElementById('admin-cancel-btn').addEventListener('click', function() { adminModal.classList.remove('active'); });
document.getElementById('admin-login-btn').addEventListener('click', verifyAdmin);
document.getElementById('confirm-cancel-btn').addEventListener('click', function() { confirmModal.classList.remove('active'); });
document.getElementById('confirm-submit-btn').addEventListener('click', function() {
    confirmModal.classList.remove('active');
    processSubmit();
});
document.getElementById('clear-cancel-btn').addEventListener('click', function() { clearModal.classList.remove('active'); });
document.getElementById('clear-confirm-btn').addEventListener('click', function() {
    localStorage.removeItem('rta_exam_results');
    loadRepositoryData();
    clearModal.classList.remove('active');
});
document.getElementById('alert-ok-btn').addEventListener('click', function() {
    alertModal.classList.remove('active');
    processSubmit();
});
document.getElementById('detail-close-btn').addEventListener('click', function() { detailsModal.classList.remove('active'); });
document.getElementById('copy-details-btn').addEventListener('click', copyDetailsToClipboard);

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
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

    var shuffledObj = shuffleArray(objectiveQuestions.slice());
    var selectedObj = shuffledObj.slice(0, 10);
    currentQuestions = selectedObj.concat(openQuestions);
    userAnswers = {};

    clearInterval(timerInterval);
    timeRemaining = 30 * 60;
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
        document.getElementById('alert-message').textContent = "El tiempo de 30 minutos se ha agotado. El examen se enviara automaticamente.";
        alertModal.classList.add('active');
    }
}

function updateTimerDisplay() {
    var minutes = Math.floor(timeRemaining / 60);
    var seconds = timeRemaining % 60;
    var timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
        var mins = minutes < 10 ? "0" + minutes : "" + minutes;
        var secs = seconds < 10 ? "0" + seconds : "" + seconds;
        timerDisplay.textContent = "Tiempo: " + mins + ":" + secs;
        if (timeRemaining <= 180) {
            timerDisplay.style.color = 'white';
            timerDisplay.style.background = '#ef4444';
            timerDisplay.style.borderColor = '#ef4444';
        } else {
            timerDisplay.style.color = '#0f172a';
            timerDisplay.style.background = '#fef3c7';
            timerDisplay.style.borderColor = '#fde68a';
        }
    }
}

function renderQuestions() {
    questionsContainer.innerHTML = '';
    for (var idx = 0; idx < currentQuestions.length; idx++) {
        (function(q, index) {
            var card = document.createElement('div');
            card.className = 'card question-card';
            var qNumber = index + 1;
            var totalQ = currentQuestions.length;
            var typeLabel = q.type === 'open' ? '(Desarrollo)' : '(Opcion Multiple)';
            var answerAreaHtml = '';

            if (q.type === 'open') {
                answerAreaHtml = '<textarea id="q' + q.id + '_open" rows="5" placeholder="Escribe tu respuesta aqui..." style="width:100%;padding:1rem;border-radius:8px;border:1px solid #e2e8f0;font-family:inherit;font-size:0.95rem;resize:vertical;margin-top:0.5rem;"></textarea>';
            } else {
                var optionsHtml = '';
                for (var i = 0; i < q.options.length; i++) {
                    optionsHtml += '<label class="option-label" for="q' + q.id + '_opt' + i + '">' +
                        '<input type="radio" class="option-input" name="q' + q.id + '" id="q' + q.id + '_opt' + i + '" value="' + i + '">' +
                        '<span class="option-text">' + q.options[i] + '</span></label>';
                }
                answerAreaHtml = '<div class="options-container">' + optionsHtml + '</div>';
            }

            card.innerHTML = '<div style="font-size:0.85rem;color:#0ea5e9;margin-bottom:0.5rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Pregunta ' + qNumber + ' de ' + totalQ + ' ' + typeLabel + '</div>' +
                '<div class="question-text">' + q.question + '</div>' + answerAreaHtml;

            questionsContainer.appendChild(card);

            if (q.type === 'open') {
                var textarea = card.querySelector('textarea');
                textarea.addEventListener('input', function(e) {
                    userAnswers[q.id] = e.target.value;
                    updateProgress();
                });
            } else {
                var inputs = card.querySelectorAll('input[type="radio"]');
                for (var r = 0; r < inputs.length; r++) {
                    inputs[r].addEventListener('change', function(e) {
                        userAnswers[q.id] = parseInt(e.target.value);
                        updateProgress();
                    });
                }
            }
        })(currentQuestions[idx], idx);
    }
    updateProgress();
}

function updateProgress() {
    var answered = 0;
    var keys = Object.keys(userAnswers);
    for (var i = 0; i < keys.length; i++) {
        if (userAnswers[keys[i]] !== '' && userAnswers[keys[i]] !== undefined) answered++;
    }
    document.getElementById('progress-text').textContent = answered + "/" + currentQuestions.length;
}

function finishExamCheck() {
    var answered = 0;
    var keys = Object.keys(userAnswers);
    for (var i = 0; i < keys.length; i++) {
        if (userAnswers[keys[i]] !== '' && userAnswers[keys[i]] !== undefined) answered++;
    }
    if (answered < currentQuestions.length) {
        document.getElementById('confirm-message').textContent = "Solo has respondido " + answered + " de " + currentQuestions.length + " preguntas. Las sin responder contaran como incorrectas. Deseas enviar de todos modos?";
        confirmModal.classList.add('active');
        return;
    }
    processSubmit();
}

function processSubmit() {
    try {
        clearInterval(timerInterval);
        calculateResults();
        switchScreen(examScreen, resultsScreen);
    } catch(e) {
        alert("ERROR in processSubmit: " + e.message + "\n" + e.stack);
    }
}

function calculateResults() {
    var correctCount = 0;
    var objCount = 0;
    var detailsRecord = [];

    for (var i = 0; i < currentQuestions.length; i++) {
        var q = currentQuestions[i];
        var userAnswer = userAnswers[q.id];
        var isObj = q.type !== 'open';
        var isCorrect = false;
        var answerText = "";
        var correctAnswerText = "";

        if (isObj) {
            objCount++;
            isCorrect = (userAnswer === q.correctAnswer);
            if (isCorrect) correctCount++;
            answerText = (userAnswer !== undefined) ? q.options[userAnswer] : "No respondida";
            correctAnswerText = q.options[q.correctAnswer];
        } else {
            answerText = userAnswer || "No respondida";
            correctAnswerText = "Revision manual requerida";
            isCorrect = null;
        }

        detailsRecord.push({ question: q.question, answer: answerText, correctAnswer: correctAnswerText, isCorrect: isCorrect, type: q.type });
    }

    var percentage = objCount > 0 ? Math.round((correctCount / objCount) * 100) : 0;

    // Score elements removed from UI - candidates only see completion message
    // Results are still saved to repository for admin review
    var statusClass = 'poor';
    var statusText = 'No Aprobado';
    if (percentage >= 80) { statusClass = 'excellent'; statusText = 'Aprobado (Test)'; }
    else if (percentage >= 60) { statusClass = 'good'; statusText = 'En Revision'; }

    saveToRepository(participantName, percentage, statusText, statusClass, detailsRecord);
}

// --- ADMIN & REPOSITORY ---

function showAdminModal() {
    document.getElementById('admin-pwd-input').value = '';
    document.getElementById('admin-error').style.display = 'none';
    adminModal.classList.add('active');
}

function verifyAdmin() {
    var pwd = document.getElementById('admin-pwd-input').value;
    if (pwd === "admin") {
        adminModal.classList.remove('active');
        loadRepositoryData();
        switchScreen(startScreen, repositoryScreen);
    } else {
        document.getElementById('admin-error').style.display = 'block';
    }
}

function saveToRepository(name, score, status, statusClass, details) {
    var history = JSON.parse(localStorage.getItem('rta_exam_results') || '[]');
    var newRecord = {
        id: Date.now(),
        date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        name: name,
        score: score,
        status: status,
        statusClass: statusClass,
        details: details
    };
    history.push(newRecord);
    localStorage.setItem('rta_exam_results', JSON.stringify(history));

    // --- INTEGRACION CON GOOGLE SHEETS ---
    // Reemplaza la siguiente linea con el enlace (URL) que te de Google Apps Script
    var GOOGLE_SCRIPT_URL = "TU_ENLACE_DE_GOOGLE_SCRIPT_AQUI"; 
    
    if (GOOGLE_SCRIPT_URL !== "TU_ENLACE_DE_GOOGLE_SCRIPT_AQUI") {
        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Evita errores de seguridad CORS
            headers: {
                'Content-Type': 'text/plain' // text/plain evita llamadas preflight que bloquea Google
            },
            body: JSON.stringify(newRecord)
        }).catch(function(error) {
            console.log('Error enviando a Sheets:', error);
        });
    }
}

function loadRepositoryData() {
    var history = JSON.parse(localStorage.getItem('rta_exam_results') || '[]');
    repoBody.innerHTML = '';
    if (history.length === 0) {
        repoBody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#64748b;">No hay evaluaciones guardadas aun.</td></tr>';
        return;
    }
    history.sort(function(a, b) { return b.id - a.id; });
    for (var i = 0; i < history.length; i++) {
        (function(record) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + record.date + '</td>' +
                '<td style="font-weight:500;color:#0f172a;">' + record.name + '</td>' +
                '<td><strong>' + record.score + '%</strong></td>' +
                '<td><span class="status-badge ' + record.statusClass + '">' + record.status + '</span></td>' +
                '<td><button class="btn secondary-btn view-details-btn" data-id="' + record.id + '" style="padding:0.3rem 0.6rem;font-size:0.8rem;">Ver Respuestas</button></td>';
            repoBody.appendChild(tr);
            tr.querySelector('.view-details-btn').addEventListener('click', function() {
                showDetailsModal(record.id);
            });
        })(history[i]);
    }
}

function showDetailsModal(id) {
    var history = JSON.parse(localStorage.getItem('rta_exam_results') || '[]');
    var record = null;
    for (var i = 0; i < history.length; i++) {
        if (history[i].id == id) { record = history[i]; break; }
    }
    if (!record) return;
    currentRecordDetails = record.details;
    document.getElementById('detail-candidate-name').textContent = record.name;
    var container = document.getElementById('detail-content');
    container.innerHTML = '';
    for (var i = 0; i < record.details.length; i++) {
        var det = record.details[i];
        var statusHtml = det.isCorrect === true ? '<span style="color:#10b981;">Correcto</span>' :
            (det.isCorrect === false ? '<span style="color:#ef4444;">Incorrecto</span>' : '<span style="color:#0ea5e9;">Pendiente revision manual</span>');
        var div = document.createElement('div');
        div.style.cssText = 'margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid #e2e8f0;';
        div.innerHTML = '<p style="font-weight:600;margin-bottom:0.2rem;font-size:0.9rem;">' + (i + 1) + '. ' + det.question + '</p>' +
            '<p style="margin-bottom:0.2rem;font-size:0.9rem;color:#64748b;">Respuesta: <strong style="color:#0f172a;">' + det.answer + '</strong></p>' +
            '<p style="font-size:0.85rem;">Estado: ' + statusHtml + '</p>';
        container.appendChild(div);
    }
    detailsModal.classList.add('active');
}

function copyDetailsToClipboard() {
    var nameEl = document.getElementById('detail-candidate-name').textContent;
    var text = nameEl + " - Resultados\n\n";
    for (var i = 0; i < currentRecordDetails.length; i++) {
        var det = currentRecordDetails[i];
        var estado = det.isCorrect === null ? 'Revision Manual' : (det.isCorrect ? 'Correcto' : 'Incorrecto');
        text += (i + 1) + ". " + det.question + "\nRespuesta: " + det.answer + "\nEstado: " + estado + "\n\n";
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() { alert("Respuestas copiadas!"); });
    } else {
        var ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        alert("Respuestas copiadas!");
    }
}

function escapeCsv(str) {
    if (str === null || str === undefined) return '""';
    return '"' + String(str).replace(/"/g, '""') + '"';
}

function downloadCSV() {
    var history = JSON.parse(localStorage.getItem('rta_exam_results') || '[]');
    if (history.length === 0) {
        alert("No hay datos para descargar. Completa al menos un examen primero.");
        return;
    }
    var csv = "\uFEFFCandidato,Fecha,Puntaje,Estado";
    for (var i = 1; i <= 12; i++) { csv += ",Pregunta_" + i + ",Respuesta_" + i + ",Resultado_" + i; }
    csv += "\n";
    for (var h = 0; h < history.length; h++) {
        var r = history[h];
        var row = [escapeCsv(r.name), escapeCsv(r.date), r.score, escapeCsv(r.status)];
        for (var d = 0; d < r.details.length; d++) {
            var det = r.details[d];
            var val = det.isCorrect === null ? 'Revision Manual' : (det.isCorrect ? 'SI' : 'NO');
            row.push(escapeCsv(det.question), escapeCsv(det.answer), escapeCsv(val));
        }
        while (row.length < 4 + 36) { row.push('""', '""', '""'); }
        csv += row.join(",") + "\n";
    }

    // Method 1: Blob URL (best)
    try {
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "resultados_rta.csv";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 2000);
        return;
    } catch(e1) {}

    // Method 2: Open CSV in new window so user can save manually
    try {
        var win = window.open('', '_blank');
        win.document.write('<pre style="font-family:monospace;font-size:12px;white-space:pre-wrap;">' + csv.replace(/</g,'&lt;') + '</pre>');
        win.document.title = "resultados_rta.csv";
        win.document.close();
        alert("Se abrio una nueva ventana con los datos. Usa Ctrl+A, Ctrl+C y pegalo en Excel o un bloc de notas.");
        return;
    } catch(e2) {}

    // Method 3: Show in textarea inside the page
    var existing = document.getElementById('csv-fallback-area');
    if (existing) { existing.remove(); }
    var wrapper = document.createElement('div');
    wrapper.id = 'csv-fallback-area';
    wrapper.style.cssText = 'position:fixed;top:10%;left:5%;width:90%;height:75%;background:#fff;border:2px solid #0ea5e9;border-radius:12px;padding:1rem;z-index:9999;display:flex;flex-direction:column;gap:0.5rem;';
    wrapper.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;"><strong>Datos CSV (Ctrl+A, Ctrl+C para copiar)</strong><button onclick="document.getElementById(\'csv-fallback-area\').remove()" style="background:#ef4444;color:white;border:none;border-radius:6px;padding:0.3rem 0.8rem;cursor:pointer;">Cerrar</button></div>';
    var ta = document.createElement('textarea');
    ta.value = csv;
    ta.style.cssText = 'flex:1;font-family:monospace;font-size:11px;border:1px solid #e2e8f0;border-radius:6px;padding:0.5rem;resize:none;';
    ta.readOnly = true;
    wrapper.appendChild(ta);
    document.body.appendChild(wrapper);
    ta.focus();
    ta.select();
}

function clearRepository() {
    clearModal.classList.add('active');
}

function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    setTimeout(function() {
        window.scrollTo(0, 0);
        showScreen.classList.add('active');
        if (showScreen === startScreen) {
            nameInput.value = '';
            document.getElementById('name-error').style.display = 'none';
        }
    }, 300);
}
