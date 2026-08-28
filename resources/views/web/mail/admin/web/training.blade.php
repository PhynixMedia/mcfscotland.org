
    <h2>Dear Admin,</h2>
    
    <p>A new form has been submitted with the following details:</p>
    
    <ul>
        <li><strong>Name:</strong> {{ $data['name'] }}</li>
        <li><strong>Email:</strong> {{ $data['email'] }}</li>
        <li><strong>Phone:</strong> {{ $data['phone'] }}</li>
        <li><strong>Title:</strong> {{ $data['title'] }}</li>
        <li><strong>Address:</strong> {{ $data['address'] }}</li>
    </ul>
    
    <p>Please, kindly follow up to confirm this.</p>
    
    <p>Thank you!</p>
    
    <p style="margin-bottom:40px">
        {{ env("APP_NAME") }}<br/>
        Online Team.
    </p>

