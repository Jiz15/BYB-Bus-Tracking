/**
 * Aegis ERP - Interactive Dashboard & Telemetry Scripts
 */

// Toast Notification Helper
function showToast(message, type = 'info', icon = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let iconName = 'info';
  let iconColor = 'text-brand-400';
  if (type === 'success') {
    iconName = 'check_circle';
    iconColor = 'text-emerald-400';
  } else if (type === 'warning') {
    iconName = 'warning';
    iconColor = 'text-amber-400';
  } else if (type === 'error') {
    iconName = 'error';
    iconColor = 'text-rose-400';
  } else if (icon) {
    iconName = icon;
  }

  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] ${iconColor}">${iconName}</span>
    <div class="flex-1">${message}</div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white text-xs">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Live Clock Initializer
function initLiveClock() {
  const clockElements = document.querySelectorAll('[data-live-clock]');
  if (clockElements.length === 0) return;

  function update() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    clockElements.forEach(el => el.textContent = timeStr);
  }
  update();
  setInterval(update, 1000);
}

// Live Telemetry Simulation Tick
function initTelemetryPulse() {
  // Random speed drift on fleet page
  setInterval(() => {
    const speedEls = document.querySelectorAll('[data-live-speed]');
    speedEls.forEach(el => {
      const base = parseInt(el.getAttribute('data-base-speed') || '25', 10);
      const delta = Math.floor(Math.random() * 5) - 2;
      const newSpeed = Math.max(0, base + delta);
      el.textContent = `${newSpeed} km/h`;
    });
  }, 4000);
}

// Attendance Table Filter and Search
function initAttendanceInteractions() {
  const searchInput = document.querySelector('[data-attendance-search]');
  const filterButtons = document.querySelectorAll('[data-attendance-filter]');
  const rosterRows = document.querySelectorAll('[data-roster-row]');
  const countBadge = document.querySelector('[data-roster-count]');

  let activeFilter = 'all';

  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    rosterRows.forEach(row => {
      const text = row.textContent.toLowerCase();
      const status = row.getAttribute('data-status') || '';
      const matchesSearch = query === '' || text.includes(query);
      const matchesFilter = activeFilter === 'all' || status.toLowerCase() === activeFilter.toLowerCase();

      if (matchesSearch && matchesFilter) {
        row.style.display = '';
        visibleCount++;
      } else {
        row.style.display = 'none';
      }
    });

    if (countBadge) {
      countBadge.textContent = `${visibleCount} Students`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterButtons.forEach(b => {
        b.classList.remove('bg-brand-600', 'text-white', 'shadow-sm');
        b.classList.add('bg-slate-100', 'text-slate-600');
      });
      btn.classList.remove('bg-slate-100', 'text-slate-600');
      btn.classList.add('bg-brand-600', 'text-white', 'shadow-sm');

      activeFilter = btn.getAttribute('data-attendance-filter') || 'all';
      applyFilters();
      showToast(`Filter applied: ${btn.textContent.trim()}`, 'info', 'filter_list');
    });
  });

  // Interactive Check-In / Check-Out Toggle on Table
  document.querySelectorAll('[data-action-toggle-attendance]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const row = this.closest('[data-roster-row]');
      if (!row) return;
      
      const statusBadge = row.querySelector('[data-status-badge]');
      const studentName = row.querySelector('[data-student-name]')?.textContent.trim() || 'Student';
      const currentStatus = row.getAttribute('data-status');

      if (currentStatus === 'Boarded' || currentStatus === 'Onboard') {
        row.setAttribute('data-status', 'Offboard');
        if (statusBadge) {
          statusBadge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200';
          statusBadge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Offboard / Arrived';
        }
        showToast(`${studentName} marked Offboard (Gate Turnstile verified)`, 'success');
      } else if (currentStatus === 'Offboard') {
        row.setAttribute('data-status', 'Absent');
        if (statusBadge) {
          statusBadge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200';
          statusBadge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Absent / Exception';
        }
        showToast(`${studentName} marked as Absent / Exception`, 'warning');
      } else {
        row.setAttribute('data-status', 'Boarded');
        if (statusBadge) {
          statusBadge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200';
          statusBadge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> Onboard Transit';
        }
        showToast(`${studentName} checked into Bus Route`, 'success');
      }
    });
  });
}

// Fleet Tracking Selection
function initFleetTracking() {
  const busCards = document.querySelectorAll('[data-bus-card]');
  const markers = document.querySelectorAll('[data-map-marker]');
  const activeRouteName = document.querySelector('[data-active-route-name]');

  busCards.forEach(card => {
    card.addEventListener('click', () => {
      const busId = card.getAttribute('data-bus-card');
      const routeTitle = card.getAttribute('data-route-title') || `Bus ${busId}`;

      busCards.forEach(c => {
        c.classList.remove('ring-2', 'ring-brand-600', 'bg-brand-50/40');
      });
      card.classList.add('ring-2', 'ring-brand-600', 'bg-brand-50/40');

      markers.forEach(m => {
        if (m.getAttribute('data-marker-bus') === busId) {
          m.classList.add('active');
        } else {
          m.classList.remove('active');
        }
      });

      if (activeRouteName) {
        activeRouteName.textContent = routeTitle;
      }

      showToast(`Selected Bus #${busId} · ${routeTitle}`, 'info', 'directions_bus');
    });
  });

  markers.forEach(marker => {
    marker.addEventListener('click', () => {
      const busId = marker.getAttribute('data-marker-bus');
      const matchingCard = document.querySelector(`[data-bus-card="${busId}"]`);
      if (matchingCard) {
        matchingCard.click();
        matchingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initTelemetryPulse();
  initAttendanceInteractions();
  initFleetTracking();

  // Export Manifest Action Demo
  document.querySelectorAll('[data-action-export]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Generating official encrypted PDF/CSV Manifest...', 'info', 'download');
      setTimeout(() => {
        showToast('Manifest exported successfully (Aegis_Fleet_Manifest.csv)', 'success', 'check');
      }, 1200);
    });
  });

  // Emergency Beacon / Broadcast Demo
  document.querySelectorAll('[data-action-broadcast]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Push alert sent to 14 active bus attendants & drivers', 'warning', 'emergency');
    });
  });
});

// Bus Gate Passage Verification Handler
window.verifyBusGatePassage = function(busId, routeName, gateName) {
  const statusEl = document.getElementById(`gate-status-bus-${busId}`);
  const btnEl = document.getElementById(`gate-btn-bus-${busId}`);
  const rowEl = document.getElementById(`gate-row-bus-${busId}`);
  if (statusEl && btnEl) {
    statusEl.className = 'inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full';
    statusEl.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Gate In Verified';
    btnEl.parentElement.innerHTML = '<span class="text-xs font-bold text-emerald-600 flex items-center justify-end gap-1"><span class="material-symbols-outlined text-[16px]">verified</span>Verified</span>';
    if (rowEl) rowEl.classList.remove('bg-amber-50/20');
    showToast(`Bus #${busId} (${routeName}) verified through ${gateName}`, 'success', 'verified');
  }
};

