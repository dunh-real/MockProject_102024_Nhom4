@extends('app')
@section('content')


<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Resident</th>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Solution</th>
      <th scope="col">Type</th>
      <th scope="col">Status</th>
      <th scope="col">Employee</th>
      <th scope="col" colspan="2">Action</th>
    </tr>
  </thead>
  <tbody>
    @foreach($complaints as $complaint)
    <tr>
      <td>{{ $loop->iteration }}</td>
      <td>{{$complaint['resident_id']}}</td>    
      <td>{{$complaint['date']}}</td>
      <td>{{$complaint['description']}}</td>
      <td>{{$complaint['status']}}</td>
      <td>{{$complaint['employee_id']}}</td>
      <td>{{$complaint['request_type']}}</td>
      <td>{{$complaint['solution']}}</td>
      <td>
        <button>
          Edit
        </button>
      </td>
      <td>
        <form action="{{ route('complaints.destroy', $complaint['id']) }}" method="POST" style="display:inline;">
          @csrf
          @method('DELETE')
          <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure?')">Delete</button>
      </form>
      </td>
    </tr>
    @endforeach
  </tbody>
</table>
@endsection