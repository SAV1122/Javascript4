let frm = document.getElementById('pegawai');
    let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
    let pilihanJabatan = `<option value=""> Pilihan Jabatan ------</option>`;
    for (let j in jabatanPilihan) {
        pilihanJabatan += `<option value="${jabatanPilihan[j]}">${jabatanPilihan[j]}</option>`;
    }
    frm.jabatan.innerHTML = pilihanJabatan;

    let statusPilihan = ["Menikah", "Belum Menikah"];
    let pilihanStatus = `<option value=""> Pilihan Status ------</option>`;
    for (let s in statusPilihan) {
        pilihanStatus += `<option value="${statusPilihan[s]}">${statusPilihan[s]}</option>`;
    }
    frm.status.innerHTML = pilihanStatus;

    function hitungGaji() {
        let nama = frm.nama.value;
        let jabatan = frm.jabatan.value;
        let status = frm.status.value;

        let gajipokok;
        switch(jabatan) {
            case 'Manager': gajipokok = 15000000; break;
            case 'Asisten Manager': gajipokok = 10000000; break;
            case 'Staff': gajipokok = 5000000; break;
        }

        let tunjanganJabatan = gajipokok * 0.15;
        let bpjs = gajipokok * 0.1;
        let tunjanganKeluarga = (status === "Menikah") ? gajipokok * 0.2 : 0;
        let totalGaji = gajipokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

        swal.fire({
            title: "Detail Gaji",
            html: `<table border="1">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Jabatan</th>
                        <th>Status</th>
                        <th>Gaji Pokok</th>
                        <th>Tunjangan Jabatan</th>
                        <th>BPJS</th>
                        <th>Tunjangan Keluarga</th>
                        <th>Total Gaji</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${nama}</td>
                        <td>${jabatan}</td>
                        <td>${status}</td>
                        <td>${gajipokok}</td>
                        <td>${tunjanganJabatan}</td>
                        <td>${bpjs}</td>
                        <td>${tunjanganKeluarga}</td>
                        <td>${totalGaji}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="7">Total Gaji</td>
                        <td>${totalGaji}</td>
                    </tr>
                </tfoot>
    
            </table>`,
            icon: "success"
        });
    }